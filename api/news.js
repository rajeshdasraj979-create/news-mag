// api/news.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const category = req.query.category || "general";
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=dc83d880720247c6a8de9dc09628063c`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // If no articles returned, fallback to static news
    const articles = (data.articles && data.articles.length > 0) ? data.articles : [
      { title: "Static News 1", description: "This is fallback news 1", url: "#" },
      { title: "Static News 2", description: "This is fallback news 2", url: "#" },
      { title: "Static News 3", description: "This is fallback news 3", url: "#" },
    ];

    res.status(200).json({ articles });
  } catch (err) {
    console.error(err);
    // Fallback to static news on error
    res.status(200).json({
      articles: [
        { title: "Static News 1", description: "This is fallback news 1", url: "#" },
        { title: "Static News 2", description: "This is fallback news 2", url: "#" },
        { title: "Static News 3", description: "This is fallback news 3", url: "#" },
      ],
    });
  }
};