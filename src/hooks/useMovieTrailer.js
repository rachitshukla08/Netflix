import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../store/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        "976573" +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const trailerVideos = json.results.filter(
      (video) => video.type.toLowerCase() === "trailer"
    );
    const trailer = trailerVideos.length ? trailerVideos[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getVideo();
  }, []);
};

export default useMovieTrailer;
