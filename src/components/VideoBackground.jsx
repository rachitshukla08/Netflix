import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailer) return;

  return (
    <div className="absolute -top-16 -z-10 w-[100%] ">
      <iframe
        className="w-[100%] aspect-video"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&disablekb=1&loop=1`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
        autoPlay
      ></iframe>
    </div>
  );
};

export default VideoBackground;
