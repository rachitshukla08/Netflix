import { useEffect } from "react";
import { API_OPTIONS, MOVIE_TYPES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addDynamicStateMovie } from "../store/movieSlice";

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

  const movieTypeToReduxStateConverter = (movieType) => {
    let convertedMovieType = movieType;
    const breakPoints = [];
    for (let index = 0; index < movieType.length; index++) {
      if (movieType.charAt(index) === "_") breakPoints.push(index);
    }
    for (let index of breakPoints) {
      if (index + 1 > movieType.length) continue;
      convertedMovieType =
        convertedMovieType.substring(0, index + 1) +
        convertedMovieType.charAt(index + 1).toUpperCase() +
        convertedMovieType.substring(index + 2);
    }
    convertedMovieType = convertedMovieType.replace(/_/g, "");
    convertedMovieType += "Movies";
    return convertedMovieType;
  };

  useEffect(() => {
    MOVIE_TYPES.forEach((movie) => fetchMovieList(movie));
  }, []);
};

export default useAllMovies;
