import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchResults } from "../store/gptSlice";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleGPTSearchClick = async () => {
    try {
      // const query =
      //   "Act like a movie recommendation system and suggest some movies for the query " +
      //   searchText.current.value +
      //   ". Only give me names of 5 movies comma separated like the example result given ahead. Example result: Gadar, Sholay, Don, Singh is King, Dhamaal";
      // const gptResults = await openai.chat.completions.create({
      //   messages: [{ role: "user", content: query }],
      //   model: "gpt-3.5-turbo",
      // });
      // const gptMovies = gptResults.choices[0].message.content.split(",");
      // gptMovies.forEach((movie) => {
      //   fetchMovieFromTMDB(movie);
      // });
      const searchResults = await fetchMovieFromTMDB(searchText.current.value);
      dispatch(addSearchResults(searchResults));
      console.log(searchResults);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchMovieFromTMDB = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="">
      <div className="max-w-3xl m-auto">
        <form className="px-16 py-16 flex" onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchText}
            type="text"
            className="w-full px-8 py-4 bg-gray-100 rounded rounded-r-none"
            placeholder="What are you feeling like watching today?"
          ></input>
          <button
            onClick={handleGPTSearchClick}
            className="px-6 w-2/6 py-2 bg-red-700 hover:bg-red-800 transition-all text-white font-medium rounded rounded-l-none"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
