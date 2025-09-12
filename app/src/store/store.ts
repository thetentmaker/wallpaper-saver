import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favoriteReducer";

// 미들웨어를 사용하여 store에서 액션과 상태 변화를 로깅할 수 있음
const loggerMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  console.log("[store] dispatch 전 액션:", action);
  const result = next(action);
  console.log("[store] dispatch 후 상태:", storeAPI.getState());
  return result;
};

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

// RootState 타입 추출
export type RootState = ReturnType<typeof store.getState>;

export default store;

// [설명]
// dispatch -> store -> favoriteReducer 순서대로 로그를 출력하려면, 
// store 레벨에서는 미들웨어(loggerMiddleware)로 dispatch 전후의 액션과 상태를 출력할 수 있습니다.
// 하지만 reducer 내부의 상세한 동작(예: favoriteReducer 내부의 분기별 처리 로그)은 reducer 파일에서 직접 console.log를 추가해야 합니다.
// 즉, store 파일에서는 액션과 상태 변화까지만 로깅이 가능합니다.