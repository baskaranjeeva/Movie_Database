import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesRecommendations from "./components/MoviesRecommendations";
import Watchlist from "./components/Watchlist";
import Movies from "./components/Movies";

function App() {
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
                <Movies />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/recommend" element={<MoviesRecommendations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
