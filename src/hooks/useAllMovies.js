import { useEffect } from "react";
import { API_OPTIONS, MOVIE_TYPES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addDynamicStateMovie } from "../store/movieSlice";
import { movieTypeToReduxStateConverter } from "../utils/common";

const useAllMovies = () => {
  const dispatch = useDispatch();
  const fetchMovieList = async (movieType) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieType}?page=1`,
      API_OPTIONS
    );
    const convertedMovieType = movieTypeToReduxStateConverter(movieType);
    const json = await data.json();
    dispatch(
      addDynamicStateMovie({ convertedMovieType, movies: json.results })
    );
  };

  useEffect(() => {
    MOVIE_TYPES.forEach((movie) => fetchMovieList(movie));
  }, []);
};

export default useAllMovies;
