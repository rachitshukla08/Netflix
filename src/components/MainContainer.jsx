import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useRandomMovie from "../hooks/useRandomMovie";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailerMovie = useRandomMovie(movies);
  if (!movies) return;
  if (!trailerMovie) return;
  const { original_title, overview, id } = trailerMovie;
  return (
    <div className="h-[100vh] min-h-[768px] flex flex-col justify-center bg-gradient-to-r from-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
