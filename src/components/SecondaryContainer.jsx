import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { MOVIE_TYPES } from "../utils/constants";
import { movieTypeToReduxStateConverter } from "../utils/common";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const titleConverter = (movieType) => {
    return movieType
      .split("_")
      .map(
        (movieWord) => movieWord.charAt(0).toUpperCase() + movieWord.slice(1)
      )
      .join(" ");
  };

  return (
    <div className="text-black py-24 px-16  gap-12 bg-gradient-to-b from-black to-[#141414]">
      <div className="-mt-72 flex flex-col gap-9">
        {MOVIE_TYPES.map((movieType) => {
          if (movies[movieTypeToReduxStateConverter(movieType)])
            return (
              <MovieList
                title={titleConverter(movieType)}
                movies={movies[movieTypeToReduxStateConverter(movieType)]}
              ></MovieList>
            );
          return null;
        })}
      </div>
    </div>
  );
};

export default SecondaryContainer;
