import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favoriteReducer";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

// RootState 타입 추출
export type RootState = ReturnType<typeof store.getState>;

export default store;