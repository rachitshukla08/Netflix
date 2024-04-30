import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard";

const GPTMovieSuggestions = () => {
  const { searchText, searchMovies } = useSelector((store) => store.gpt);
  if (!searchMovies) return;
  if (!searchText) return;
  const filteredMovies = searchMovies.filter(
    (movie) => movie.poster_path !== null
  );
  return (
    <div className="text-white mx-16 flex flex-wrap gap-7 pb-20">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <MovieCard
            posterPath={movie.poster_path}
            key={movie.id}
            unbound={true}
          />
        ))
      ) : (
        <h1 className="text-2xl font-medium">No results found</h1>
      )}
    </div>
  );
};

export default GPTMovieSuggestions;
