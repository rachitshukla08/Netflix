import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    showMiniPlayer: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addDynamicStateMovie: (state, action) => {
      const { convertedMovieType, movies } = action.payload;
      state[convertedMovieType] = movies;
    },
    toggleShowMiniPlayer: (state) => {
      state.showMiniPlayer = !state.showMiniPlayer;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addDynamicStateMovie,
  toggleShowMiniPlayer,
} = movieSlice.actions;
