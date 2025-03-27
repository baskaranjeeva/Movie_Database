import React from "react";
import Logo from "../movie_logo_1.png";

function Navbar() {
  return (
    <div className="bg-orange-200 flex justify-between items-center">
      <div className="w-[80px] h-[80px] ml-5 mt-3">
        <img src={Logo} alt="logo" />
      </div>
      <div className="space-x-15 mr-10 text-2xl font-bold">
        <a href="/">Movies</a>
        <a href="/watchlist">Watchlist</a>
        <a href="/recommend">Movies Recommendations</a>
      </div>
    </div>
  );
}
export default Navbar;
