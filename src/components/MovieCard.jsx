import React, { useState } from "react";
import { imgCDN } from "../utils/constants";
import MiniPlayer from "./MiniPlayer";

const MovieCard = ({ posterPath, unbound }) => {
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const enter = () => {
    console.log("Entering MovieCard");
    setShowMiniPlayer(true);
  };
  const exit = () => {
    console.log("Exit MovieCard");
    // setShowMiniPlayer(false);
  };
  const getClassName = () => {
    if (unbound) return "flex-shrink-0 flex-grow-0 overflow-hidden rounded-sm";
    return "w-[230px] h-[130px] flex-shrink-0 flex-grow-0 overflow-hidden rounded-sm";
  };
  return (
    <div className="relative">
      {showMiniPlayer && <MiniPlayer />}
      <div className={getClassName()}>
        <img
          className="w-[200px] max-h-[300px]"
          alt="movie card"
          src={imgCDN + posterPath}
        ></img>
      </div>
    </div>
  );
};

export default MovieCard;
