import React from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import useAllMovies from "../hooks/useAllMovies";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  // useNowPlayingMovies();
  // usePopularMovies();
  // useTopRatedMovies();
  // useUpcomingMovies();
  useAllMovies();

  return (
    <div className="">
      {showGPTSearch ? (
        <>
          <div className="bg-[#141414] min-h-svh bg-gradient-to-r from-black">
            <Header />
            <GPTSearch />
          </div>
        </>
      ) : (
        <div className="min-h-svh bg-gradient-to-r from-0% to-70% from-black/70">
          <Header />
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
