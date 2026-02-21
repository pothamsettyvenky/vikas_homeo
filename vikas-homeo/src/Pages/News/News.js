import React, { useEffect, useState, useCallback } from "react";
import "./News.css";

import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { CLOUDINARY_CONFIG } from "../../cloudinary";

export default function News() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "6236eb8a5be86832896372d77515edea";

  const today = new Date().toISOString().split("T")[0];


  /* --------------------------
     Upload image to Cloudinary
  -------------------------- */

  const uploadImage = useCallback(async (imageUrl) => {

    try {

      if (!imageUrl) return null;

      if (imageUrl.includes("res.cloudinary.com")) {
        return imageUrl;
      }

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

      return data.secure_url || imageUrl;

    }
    catch {

      return imageUrl;

    }

  }, []);


  /* --------------------------
     Fetch Firestore backup
  -------------------------- */

  const fetchFromFirestore = useCallback(async () => {

    try {

      const ref = doc(db, "news", today);

      const snap = await getDoc(ref);

      if (snap.exists()) {

        const data = snap.data().articles;

        setArticles(data);

      } else {

        setArticles([]);

      }

    }
    catch {

      setArticles([]);

    }

  }, [today]);


  /* --------------------------
     Fetch from GNews
  -------------------------- */

  const fetchFromGNews = useCallback(async () => {

    try {

      const res = await fetch(
        `https://gnews.io/api/v4/search?q=homeopathy OR homoeopathy OR naturopathy OR ayurveda&max=12&token=${API_KEY}`
      );

      const data = await res.json();

      let gnewsArticles = [];

      if (data.articles?.length > 0) {

        gnewsArticles = data.articles;

      }
      else if (
        data.articlesRemovedFromResponse?.historicalArticles
      ) {

        gnewsArticles =
          data.articlesRemovedFromResponse.historicalArticles;

      }
      else {

        await fetchFromFirestore();
        return;

      }


      /* show instantly */

      const instantArticles =
        gnewsArticles.map(article => ({

          title: article.title,
          description: article.description,
          url: article.url,
          image: article.image,
          publishedAt: article.publishedAt

        }));

      setArticles(instantArticles);

      setLoading(false);


      /* upload images in background */

      const processed = await Promise.all(

        gnewsArticles.map(async article => {

          const imageUrl =
            await uploadImage(article.image);

          return {

            title: article.title,
            description: article.description,
            url: article.url,
            image: imageUrl,
            publishedAt: article.publishedAt

          };

        })

      );


      /* save backup */

      await setDoc(doc(db, "news", today), {

        articles: processed,
        createdAt: new Date()

      });

    }
    catch {

      await fetchFromFirestore();

      setLoading(false);

    }

  }, [API_KEY, today, fetchFromFirestore, uploadImage]);


  /* --------------------------
     useEffect
  -------------------------- */

  useEffect(() => {

    const load = async () => {

      await fetchFromFirestore();

      await fetchFromGNews();

      setLoading(false);

    };

    load();

  }, [fetchFromFirestore, fetchFromGNews]);


  /* --------------------------
     Render
  -------------------------- */

  return (

    <section className="news-page">

      <div className="news-container">

        <h2 className="news-title">
          Latest Homoeopathy & Naturopathy News
        </h2>


        {loading  ? (

  <div className="homeo-loader-container">

    <div className="homeo-bottle">

      <div className="globule g1"></div>
      <div className="globule g2"></div>
      <div className="globule g3"></div>
      <div className="globule g4"></div>

    </div>

    <h3 className="homeo-loading-text">
      Preparing your remedies...
    </h3>

  </div>) : articles.length === 0 ? (

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
                    {new Date(
                      article.publishedAt
                    ).toLocaleDateString()}
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