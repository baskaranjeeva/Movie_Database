import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesRecommendations from "./components/MoviesRecommendations";
import Watchlist from "./components/Watchlist";
import Movies from "./components/Movies";

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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                {/* <div className="flex flex-wrap justify-evenly ml-4 gap-6">
                  <MovieCard />
                </div> */}
                <Movies
                  addWatchList={handleAddWatchList}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<Watchlist watchlistData={watchlist} />}
          />
          <Route path="/recommend" element={<MoviesRecommendations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
