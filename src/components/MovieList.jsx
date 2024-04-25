import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="text-white">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex overflow-x-scroll overflow-y-visible gap-2 pb-4 pt-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
