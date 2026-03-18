export default async function handler(req, res) {
  try {
    const API_KEY = "6236eb8a5be86832896372d77515edea";

    const response = await fetch(
      `https://gnews.io/api/v4/search?q=homeopathy OR homoeopathy OR naturopathy OR ayurveda&max=12&token=${API_KEY}`
    );

    const data = await response.json();

    let articles = [];

    if (data.articles && data.articles.length > 0) {
      articles = data.articles;
    } else if (data.articlesRemovedFromResponse?.historicalArticles) {
      articles = data.articlesRemovedFromResponse.historicalArticles;
    }

    const formatted = articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.image,
      publishedAt: article.publishedAt
    }));

    res.status(200).json({ articles: formatted });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}