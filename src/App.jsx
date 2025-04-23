import { useState, useEffect, Suspense } from "react";
import "./App.css";
import { lazy } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MoviesRecommendations from "./components/MoviesRecommendations";
// import Watchlist from "./components/Watchlist";
// import Movies from "./components/Movies";
import { MovieContext } from "./components/MovieContext";

const LazyMovies = lazy(() => import("./components/Movies.jsx"));
const LazyWatchlist = lazy(() => import("./components/Watchlist.jsx"));
const LazyMoviesRecommendations = lazy(() =>
  import("./components/MoviesRecommendations.jsx")
);

function App() {
  const [watchlist, setWatchList] = useState([]);
  const handleAddWatchList = (movieObj) => {
    let updatedWatchlist = [...watchlist, movieObj];
    setWatchList(updatedWatchlist);
    // console.log(updatedWatchlist);
    localStorage.setItem("myMovies_3", JSON.stringify(updatedWatchlist));
  };
  // console.log(watchlist);
  useEffect(() => {
    let dataFromLs = localStorage.getItem("myMovies_3");
    if (!dataFromLs) {
      return;
    }
    setWatchList(JSON.parse(dataFromLs));
  }, []);
  return (
    <div>
      <MovieContext.Provider value={({ handleAddWatchList }, { watchlist })}>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Banner />
                    {/* <div className="flex flex-wrap justify-evenly ml-4 gap-6">
                  <MovieCard />
                  </div> */}
                    {/* <Movies /> */}
                    <LazyMovies />
                  </>
                }
              />
              <Route
                path="/watchlist"
                element={<LazyWatchlist watchlistData={watchlist} />}
              />
              <Route
                path="/recommend"
                element={<LazyMoviesRecommendations />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
