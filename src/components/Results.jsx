import React from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import FlipMove from "react-flip-move";
function Results({ movies }) {
  return (
    <div className="results">
      <FlipMove>
        {movies.length > 0 ? (
          movies.map((movie) => <VideoCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p style={{ color: "white", marginTop: "20px" }}>
            No movies found for this category.
          </p>
        )}
      </FlipMove>
    </div>
  );
}

export default Results;
