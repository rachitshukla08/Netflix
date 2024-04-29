import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailer) return;

  return (
    <div className="absolute -top-16 -z-10 w-[100%] overflow-x-clip bg-gradient-to-r from-black h-svh">
      {/* Added playlist id same as video ID in iframe so that video loops */}
      <div className="relative h-full">
        <iframe
          className="h-[100%] aspect-video sm:min-h-[914px] min-h-[950px] md:max-w-none sm:max-w-[120%] max-w-[150%]"
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
