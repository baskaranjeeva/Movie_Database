import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
Pagination;

function Movies({ addWatchList, watchlist }) {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  // console.log(movie);
  function prevPage() {
    if (page > 0) {
      setPage(page - 1);
    }
  }
  function nextPage() {
    setPage(page + 1);
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=1806b0958523875dfa6632afce44caad&language=en-US&page=${page}`
      )
      .then((resolve) => {
        // console.log(resolve.data.results);
        setMovie(resolve.data.results);
      })
      .catch((err) => {
        console.error(err, "Can't fetch API data");
      });
  }, [page]);
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-evenly">
        {movie.map((movieObj) => (
          <MovieCard
            movieObject={movieObj}
            finalAddWatchlist={addWatchList}
            watchlist={watchlist}
          />
        ))}
      </div>
      <Pagination pageNo={page} prePg={prevPage} nxtPg={nextPage} />;
    </div>
  );
}

export default Movies;
