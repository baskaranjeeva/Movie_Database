import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "../slices/paginationSlice";
import movieSlice from "../Movies/movieSlice";

const store = configureStore({
  reducer: {
    page: paginationSlice.reducer,
    movieState: movieSlice.reducer,
  },
});

export default store;
