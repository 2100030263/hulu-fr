import React from "react";
import "./Nav.css";

function Nav({ fetchMovies }) {
  const categories = [
    { label: "Trending", query: "trending" },
    { label: "Top Rated", query: "top" },
    { label: "Action", query: "action" },
    { label: "Comedy", query: "comedy" },
    { label: "Horror", query: "horror" },
    { label: "Romance", query: "romance" },
    { label: "Mystery", query: "mystery" },
    { label: "Sci-fi", query: "sci-fi" },
    { label: "Western", query: "western" },
    { label: "Animation", query: "animation" },
    { label: "Movie", query: "movie" },
  ];

  return (
    <div className="nav">
      {categories.map((category) => (
        <h2 key={category.query} onClick={() => fetchMovies(category.query)}>
          {category.label}
        </h2>
      ))}
    </div>
  );
}

export default Nav;
