import React, { useEffect, useState, useCallback } from "react";
import "./News.css";

import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { CLOUDINARY_CONFIG } from "../../cloudinary";

export default function News() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

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

      // ⚠️ IMPORTANT FIX: use fetch blob instead of direct URL
      const imgRes = await fetch(imageUrl);
      const blob = await imgRes.blob();

      fd.append("file", blob);
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

    } catch {
      return imageUrl;
    }
  }, []);

  /* --------------------------
     Firestore fallback
  -------------------------- */

  const fetchFromFirestore = useCallback(async () => {
    try {
      const ref = doc(db, "news", today);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data().articles;
        if (data && data.length > 0) {
          setArticles(data);
        }
      }
    } catch {
      console.log("Firestore fetch failed");
    }
  }, [today]);

  /* --------------------------
     MAIN API CALL (NO CORS)
  -------------------------- */

  const fetchFromAPI = useCallback(async () => {
    try {
      const res = await fetch("/api/news");
      const data = await res.json();

      if (!data.articles || data.articles.length === 0) {
        await fetchFromFirestore();
        setLoading(false);
        return;
      }

      // show instantly
      setArticles(data.articles);
      setLoading(false);

      // upload images in background
      const processed = await Promise.all(
        data.articles.map(async article => ({
          ...article,
          image: await uploadImage(article.image)
        }))
      );

      // save backup
      await setDoc(doc(db, "news", today), {
        articles: processed,
        createdAt: new Date()
      });

    } catch (error) {
      console.log("API failed → Firestore fallback");
      await fetchFromFirestore();
      setLoading(false);
    }
  }, [fetchFromFirestore, uploadImage, today]);

  /* --------------------------
     useEffect
  -------------------------- */

  useEffect(() => {
    fetchFromAPI();
  }, [fetchFromAPI]);

  /* --------------------------
     UI
  -------------------------- */

  return (
    <section className="news-page">
      <div className="news-container">

        <h2 className="news-title">
          Latest Homoeopathy & Naturopathy News
        </h2>

        {loading ? (
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
          </div>

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
                    {new Date(article.publishedAt).toLocaleDateString()}
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