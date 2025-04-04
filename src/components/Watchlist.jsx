import React, { useEffect, useState } from "react";
import genreids from "./utilities/genreids";

function Watchlist({ watchlistData }) {
  const [searchMovie, setSearchMovie] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  useEffect(() => {
    let temp = watchlistData.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlistData]);
  // console.log("Genre List: ", genreList);
  // console.log(watchlistData);

  function handleFilter(genre) {
    setCurrGenre(genre);
  }
  function findMovies(e) {
    setSearchMovie(e.target.value);
    // console.log(searchMovie);
  }
  // console.log(watchlistData);
  return (
    <div>
      {/* Genre section */}
      <div className="flex justify-center m-2">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center items-center w-[6rem] h-[3rem] bg-blue-400 m-4 rounded-xl text-white font-bold cursor-pointer"
                  : "flex justify-center items-center w-[6rem] h-[3rem] bg-gray-400 m-4 rounded-xl text-white font-bold cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      {/* Search Box */}
      <div className="flex justify-center m-3">
        <input
          type="text"
          placeholder="Search Movies"
          className="w-[200px] h-[40px] border-2 border-gray-300"
          onChange={findMovies}
          value={searchMovie}
        />
      </div>
      {/* Table */}
      <div className="ml-8 mr-8">
        <table className="w-full">
          <thead className="h-[60px] bg-gray-300">
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Movies Delete</th>
            </tr>
          </thead>
          <tbody>
            {watchlistData
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(searchMovie.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="text-center border-b-2 border-gray-300">
                    <td>
                      <div className="flex items-center gap-3">
                        <img
                          className="w-[10rem] h-[6rem] m-4"
                          src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                          alt=""
                        />
                        <div>{movieObj.title}</div>
                      </div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td className="text-red-500">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Watchlist;
