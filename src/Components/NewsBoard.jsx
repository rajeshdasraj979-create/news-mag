import { useEffect, useState } from "react";

const NewsBoard = ({ category = "general" }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Use the Vercel serverless function instead of NewsAPI directly
    const url = `/api/news?category=${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setArticles([]);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center mt-4">
        {category.toUpperCase()} <span className="badge bg-danger">News</span>
      </h2>

      {loading && (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-danger" role="status" />
        </div>
      )}

      {!loading && articles.length === 0 && (
        <p className="text-center mt-4">
          No articles found for {category}
        </p>
      )}

      <div className="row">
        {!loading &&
          articles.map((news, index) => (
            <div className="col-md-4 my-3" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={
                    news.urlToImage ||
                    "https://via.placeholder.com/300x180?text=No+Image"
                  }
                  className="card-img-top"
                  alt="news"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">
                    {news.description
                      ? news.description.slice(0, 100) + "..."
                      : "No description available"}
                  </p>
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-danger mt-auto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsBoard;