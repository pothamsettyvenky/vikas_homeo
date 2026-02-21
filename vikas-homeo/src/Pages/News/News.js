import React, { useEffect, useState } from "react";
import "./News.css";

import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { CLOUDINARY_CONFIG } from "../../cloudinary";

export default function News() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "6236eb8a5be86832896372d77515edea";

  const today = new Date().toISOString().split("T")[0];

  // Upload image to Cloudinary
  const uploadImage = async (imageUrl) => {

    try {

      if (!imageUrl) return null;

      const fd = new FormData();

      fd.append("file", imageUrl);
      fd.append("upload_preset", CLOUDINARY_CONFIG.uploadPreset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
        {
          method: "POST",
          body: fd
        }
      );

      const data = await res.json();

      if (data.secure_url) {

        console.log("Cloudinary success:", data.secure_url);

        return data.secure_url;

      } else {

        console.log("Cloudinary failed, using original");

        return imageUrl;

      }

    } catch (err) {

      console.log("Cloudinary error:", err);

      return imageUrl;

    }

  };

  // Fetch backup from Firestore
  const fetchFromFirestore = async () => {

    try {

      console.log("Fetching from Firestore backup");

      const ref = doc(db, "news", today);

      const snap = await getDoc(ref);

      if (snap.exists()) {

        const data = snap.data().articles;

        console.log("Firestore data:", data);

        setArticles(data);

      } else {

        console.log("No Firestore backup found");

        setArticles([]);

      }

    } catch (err) {

      console.log("Firestore error:", err);

      setArticles([]);

    }

  };

  // Fetch from GNews
  const fetchFromGNews = async () => {

  try {

    const res = await fetch(
      `https://gnews.io/api/v4/search?q=homeopathy OR homoeopathy OR naturopathy OR ayurveda&max=12&token=${API_KEY}`
    );

    const data = await res.json();

    let gnewsArticles = [];

    if (data.articles?.length > 0) {

      gnewsArticles = data.articles;

    }
    else if (data.articlesRemovedFromResponse?.historicalArticles) {

      gnewsArticles =
        data.articlesRemovedFromResponse.historicalArticles;

    }
    else {

      await fetchFromFirestore();
      return;

    }

    // STEP 1: show instantly using original images
    const instantArticles = gnewsArticles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.image,
      publishedAt: article.publishedAt
    }));

    setArticles(instantArticles);

    setLoading(false);

    // STEP 2: upload images in background (no waiting)
    const processed = await Promise.all(

  gnewsArticles.map(async article => {

    let imageUrl = article.image;

    // ✅ Prevent duplicate upload
    if (
      imageUrl &&
      !imageUrl.includes("res.cloudinary.com")
    ) {
      imageUrl = await uploadImage(imageUrl);
    }

    return {
      title: article.title,
      description: article.description,
      url: article.url,
      image: imageUrl,
      publishedAt: article.publishedAt
    };

  })

);

    // STEP 3: save to Firestore
    await setDoc(doc(db, "news", today), {

      articles: processed,
      createdAt: new Date()

    });

    console.log("Saved to Firestore");

  }
  catch {

    await fetchFromFirestore();

    setLoading(false);

  }

};

  useEffect(() => {

  const load = async () => {

    // ✅ Load Firestore backup instantly
    await fetchFromFirestore();

    // ✅ Then update from GNews silently
    await fetchFromGNews();

    setLoading(false);

  };

  load();

}, []);

  return (

    <section className="news-page">

      <div className="news-container">

        <h2 className="news-title">
          Latest Homoeopathy & Naturopathy News
        </h2>

        {loading ? (

          <p>Loading...</p>

        ) : articles.length === 0 ? (

          <p>No news available</p>

        ) : (

          <div className="news-grid">

            {articles.map((article, i) => (

              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card"
              >

                {article.image && (

                  <img
                    src={article.image}
                    alt=""
                    className="news-image"
                  />

                )}

                <div className="news-content">

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <span>

                    {new Date(article.publishedAt)
                      .toLocaleDateString()}

                  </span>

                </div>

              </a>

            ))}

          </div>

        )}

      </div>

    </section>

  );

}