import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGPTSearch: false,
    searchMovies: null,
    searchText: null,
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
      if (state.showGPTSearch === false) state.searchMovies = null;
    },
    addSearchResults: (state, action) => {
      state.searchMovies = action.payload.searchResults;
      state.searchText = action.payload.searchMovieText;
    },
    showHomePage: (state) => {
      state.showGPTSearch = false;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGPTSearch, addSearchResults, showHomePage } =
  gptSlice.actions;
