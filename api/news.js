// api/news.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const category = req.query.category || "general";
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=dc83d880720247c6a8de9dc09628063c`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ articles: [] });
  }
};