import { useEffect, useState } from "react";

const useRandomMovie = (movies) => {
  const [idx, setIdx] = useState();
  const [randomMovie, setRandomMovie] = useState();
  useEffect(() => {
    if (!movies) return;
    setIdx(Math.floor(Math.random() * movies.length));
  }, [movies]);
  useEffect(() => {
    if (movies && idx !== null) setRandomMovie(movies[idx]);
  }, [movies, idx]);
  return randomMovie;
};

export default useRandomMovie;
