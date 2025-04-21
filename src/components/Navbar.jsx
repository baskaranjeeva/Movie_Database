import React from "react";
import Logo from "../movie_logo_1.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-yellow-400 flex justify-between items-center">
      <div className="w-[80px] h-[80px] ml-5 mt-3">
        <img src={Logo} alt="logo" />
      </div>
      <div className="space-x-15 mr-10 text-2xl font-bold">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/recommend">Movies Recommend</Link>
      </div>
    </div>
  );
}
export default Navbar;
