import React from "react";

function MovieCard({ movieObject }) {
  return (
    <div
      className="w-[260px] h-[40vh] bg-cover rounded-lg flex justify-center content-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
      }}
    >
      <h5 className="text-white text-xl">{movieObject.title}</h5>
    </div>
  );
}
export default MovieCard;
