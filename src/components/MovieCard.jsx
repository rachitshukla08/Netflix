import React from "react";
import { imgCDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[230px] h-[130px] flex-shrink-0 flex-grow-0 overflow-hidden rounded-sm">
      <img alt="movie card" src={imgCDN + posterPath}></img>
    </div>
  );
};

export default MovieCard;
