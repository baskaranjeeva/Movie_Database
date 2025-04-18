import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import paginationSlice from "../slices/paginationSlice";
import { useSelector, useDispatch } from "react-redux";
import store from "../redux/store";
import movieMiddleware from "../Movies/movieMiddleware";

function Movies() {
  // const [movie, setMovie] = useState([]);
  // const [page, setPage] = useState(1);
  const { movies, loading, error } = useSelector((store) => store.movieState);
  const page = useSelector((store) => store.page.pageNo);
  console.log(movies);
  const dispatch = useDispatch();
  // console.log("Movies page number: ", page);
  // console.log(movie);
  // function prevPage() {
  //   if (page > 0) {
  //     setPage(page - 1);
  //   }
  // }
  // function nextPage() {
  //   setPage(page + 1);
  // }
  useEffect(() => {
    dispatch(movieMiddleware(page));
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/top_rated?api_key=1806b0958523875dfa6632afce44caad&language=en-US&page=${page}`
    //   )
    //   .then((resolve) => {
    //     // console.log(resolve.data.results);
    //     setMovie(resolve.data.results);
    //   })
    //   .catch((err) => {
    //     console.error(err, "Can't fetch API data");
    //   });
  }, [page]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Ops...Something went wrong!</h1>;
  }
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-evenly">
        {movies.map((movieObj) => (
          <MovieCard movieObject={movieObj} />
        ))}
      </div>
      <Pagination />;
    </div>
  );
}

export default Movies;
