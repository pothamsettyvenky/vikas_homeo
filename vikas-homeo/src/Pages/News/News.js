import React, { useEffect, useState } from "react";
import "./News.css";

export default function News() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "6236eb8a5be86832896372d77515edea";

  useEffect(() => {

    const fetchNews = async () => {

      try {

        const response = await fetch(
          `https://gnews.io/api/v4/search?q=homoeopathy OR naturopathy&lang=en&max=12&token=${API_KEY}`
        );

        const data = await response.json();

        if (data.articles) {
          setArticles(data.articles);
        }

      } catch (error) {
        console.error("Error fetching news:", error);
      }

      setLoading(false);

    };

    fetchNews();

  }, []);

  return (

    <section className="news-page">

      <div className="news-container">

        <h2 className="news-title">
          Latest Homoeopathy & Naturopathy News
        </h2>

        {loading ? (

          <p className="news-loading">Loading news...</p>

        ) : (

          <div className="news-grid">

            {articles.map((article, index) => (

              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card"
              >

                <img
                  src={article.image || "/default-news.jpg"}
                  alt=""
                  className="news-image"
                />

                <div className="news-content">

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <span className="news-date">
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
