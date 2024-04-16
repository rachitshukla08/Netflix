import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailer) return;

  return (
    <div className="absolute -top-16 -z-10 w-[100%] ">
      {/* Added playlist id same as video ID in iframe so that video loops */}
      <div className="relative">
        <iframe
          className="h-[100%] aspect-video max-w-[100%] min-h-[914px]"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&disablekb=1&loop=1&playlist=${trailer.key}`}
          title="YouTube video player"
          referrerPolicy="strict-origin-when-cross-origin"
          autoPlay
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
