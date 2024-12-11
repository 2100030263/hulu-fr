import React, { forwardRef } from "react";
import "./VideoCard.css";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
});

export default VideoCard;
