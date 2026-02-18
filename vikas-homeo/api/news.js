import Parser from "rss-parser";

const parser = new Parser();

export default async function handler(req, res) {
  try {

    const feed = await parser.parseURL(
      "https://news.google.com/rss/search?q=homoeopathy+naturopathy&hl=en-IN&gl=IN"
    );

    const articles = feed.items.map(item => ({
      title: item.title,
      description: item.contentSnippet,
      url: item.link,
      publishedAt: item.pubDate
    }));

    res.status(200).json({ articles });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
