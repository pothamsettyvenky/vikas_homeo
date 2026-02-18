import React, { useEffect, useState } from "react";
import "./News.css";

export default function News() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 9;

  useEffect(() => {

    const fetchNews = async () => {

      try {

         const baseURL =
          window.location.port === "3000"
            ? "http://192.168.0.127:5000"
            : "";

        const response = await fetch(`${baseURL}/api/news`);

        const data = await response.json();

        if (data.articles) {
          setArticles(data.articles);
        }

      } catch (error) {
        console.error("Fetch error:", error);
      }

      setLoading(false);

    };

    fetchNews();

  }, []);

  // Calculate pagination indexes
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="news-page">

      <div className="news-container">

        <h2 className="news-title">
          Latest Homoeopathy & Naturopathy News
        </h2>

        {loading ? (

          <p className="news-loading">Loading news...</p>

        ) : (

          <>
            <div className="news-grid">

              {currentArticles.map((article, index) => (

                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-card"
                >

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

            {/* Pagination buttons */}
            {totalPages > 1 && (
              <div className="pagination">

                {Array.from({ length: totalPages }, (_, i) => (

                  <button
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className={
                      currentPage === i + 1
                        ? "page-btn active"
                        : "page-btn"
                    }
                  >
                    {i + 1}
                  </button>

                ))}

              </div>
            )}

          </>

        )}

      </div>

    </section>
  );

}
