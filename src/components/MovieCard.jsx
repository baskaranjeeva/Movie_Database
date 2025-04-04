import React from "react";

function MovieCard({ movieObject, finalAddWatchlist, watchlist }) {
  function doesContain(movieObject) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObject.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div>
      <div
        className="w-[260px] h-[40vh] bg-cover rounded-lg "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
        }}
      >
        {doesContain(movieObject) ? (
          <div className="flex justify-end mr-3 pt-1">&#10060;</div>
        ) : (
          <div
            className="flex justify-end mr-3 pt-1 cursor-pointer"
            onClick={() => finalAddWatchlist(movieObject)}
          >
            &#128151;
          </div>
        )}

        <h5 className="text-white text-xl  text-center mt-30">
          {movieObject.title}
        </h5>
      </div>
    </div>
  );
}
export default MovieCard;
