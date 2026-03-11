const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Daily Buzz
        </a>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {[
              "general",
              "business",
              "entertainment",
              "health",
              "science",
              "sports",
              "technology",
            ].map((cat) => (
              <li className="nav-item" key={cat}>
                <button
                  className="btn btn-link nav-link"
                  onClick={() => setCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;