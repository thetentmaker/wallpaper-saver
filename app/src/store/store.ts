import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favoriteReducer";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

export default store;