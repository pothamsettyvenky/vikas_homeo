const express = require("express");
const Parser = require("rss-parser");
const cors = require("cors");

const app = express();
const parser = new Parser();

app.use(cors());

app.get("/api/news", async (req, res) => {
  try {

    const feed = await parser.parseURL(
      "https://news.google.com/rss/search?q=homoeopathy+naturopathy&hl=en-IN&gl=IN&ceid=IN:en"
    );

    const articles = feed.items.map(item => {

      let image = null;

      if (item.content) {
        const match = item.content.match(/<img[^>]+src="([^">]+)"/);
        if (match) image = match[1];
      }

      return {
        title: item.title,
        description: item.contentSnippet,
        url: item.link,
        publishedAt: item.pubDate,
        image: image
      };

    });

    res.json({ articles });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to fetch news"
    });

  }
});

// IMPORTANT: allow LAN access
app.listen(5000, "0.0.0.0", () => {
  console.log("API running on http://192.168.0.127:5000");
});
