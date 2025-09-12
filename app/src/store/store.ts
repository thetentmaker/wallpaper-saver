import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import favoriteReducer from "../reducers/favoriteReducer";

// redux-persist 설정
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// 미들웨어를 사용하여 store에서 액션과 상태 변화를 로깅할 수 있음
const loggerMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  console.log("[store] dispatch 전 액션:", action);
  const result = next(action);
  console.log("[store] dispatch 후 상태:", storeAPI.getState());
  return result;
};

// persistReducer로 rootReducer를 래핑
const rootReducer = combineReducers({
  favorite: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(loggerMiddleware),
});

const persist = persistStore(store as any);

// RootState 타입 추출
export type RootState = ReturnType<typeof store.getState>;

export default store;
export { persist };

// [설명]
// dispatch -> store -> favoriteReducer 순서대로 로그를 출력하려면,
// store 레벨에서는 미들웨어(loggerMiddleware)로 dispatch 전후의 액션과 상태를 출력할 수 있습니다.
// 하지만 reducer 내부의 상세한 동작(예: favoriteReducer 내부의 분기별 처리 로그)은 reducer 파일에서 직접 console.log를 추가해야 합니다.
// 즉, store 파일에서는 액션과 상태 변화까지만 로깅이 가능합니다.

// [설명2] Redux Persist 동작 원리
// 1. 앱 시작 시 동작 순서:
//    앱 시작 → store 생성 → persistStore() 호출 → AsyncStorage에서 데이터 읽기 → REHYDRATE 액션 자동 dispatch
//
// 2. persistedReducer의 역할:
//    - 원래 rootReducer를 감싸서(wrapping) persist 기능을 추가
//    - 'persist/REHYDRATE' 액션: AsyncStorage에서 읽어온 데이터로 상태 복원
//    - 'persist/PERSIST' 액션: 상태 변경 시 AsyncStorage에 자동 저장
//    - 일반 액션들은 그대로 원래 reducer에게 전달
//
// 3. 상태 복원 과정:
//    - persistStore()가 호출되면 AsyncStorage.getItem('persist:root')로 저장된 데이터 조회
//    - 조회된 데이터를 payload로 하는 REHYDRATE 액션을 자동으로 dispatch
//    - persistedReducer가 이 액션을 받아서 favoriteReducer의 상태를 복원된 데이터로 업데이트
//    - 결과적으로 앱을 껐다 켜도 즐겨찾기 목록이 그대로 유지됨
//
// 4. 개발자 관점에서의 투명성:
//    - favoriteReducer는 persist 기능을 전혀 알 필요 없음 (일반 reducer 그대로 작성)
//    - 모든 persist 로직은 persistedReducer 래퍼에서 처리
//    - 상태 저장/복원이 Redux의 액션 시스템을 통해 자동으로 이루어짐
