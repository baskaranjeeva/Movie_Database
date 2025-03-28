import React from "react";

function Pagination({ pageNo, prePg, nxtPg }) {
  return (
    <div className="w-[100vw] h-[50px] bg-amber-700 mt-5 text-2xl flex justify-center items-center gap-5">
      <div onClick={prePg}>
        <i class="fa-solid fa-left-long"></i>
      </div>
      <div className="font-bold text-2xl">{pageNo}</div>
      <div onClick={nxtPg}>
        <i class="fa-solid fa-right-long"></i>
      </div>
    </div>
  );
}
export default Pagination;
