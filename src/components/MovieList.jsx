import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies }) => {
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  const enter = () => {
    console.log("Entering MovieCard");
    setShowMiniPlayer(true);
  };
  const exit = () => {
    console.log("Exit MovieCard");
    // setShowMiniPlayer(false);
  };
  return (
    // <div>
    //   <div className="text-white">
    //     <h1 className="text-2xl font-bold">{title}</h1>
    //     <div className="flex overflow-x-scroll overflow-y-visible gap-2 pb-4 pt-4">
    //       {movies.map((movie) => (
    //         <MovieCard key={movie.id} posterPath={movie.poster_path} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="slider-container">
      <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
