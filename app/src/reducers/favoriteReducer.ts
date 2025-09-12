import { UnknownAction } from "redux";
import { ACTION_CLICKED_FAVORITE } from "../actions/favorite";

const initialState = {
  favorites: [] as string[],
};

interface ClickFavoriteAction {
  type: typeof ACTION_CLICKED_FAVORITE;
  clicked: string;
}

type FavoriteAction = ClickFavoriteAction | UnknownAction;

/**
 * favoriteReducer는 즐겨찾기(favorite) 상태를 관리하는 리듀서입니다.
 * 
 * state: 현재 즐겨찾기 상태를 나타내며, 기본값은 initialState입니다.
 * action: FavoriteAction 타입의 액션 객체로, 주로 ACTION_CLICKED_FAVORITE 액션을 처리합니다.
 */
const favoriteReducer = (state = initialState, action: FavoriteAction) => {
  switch (action.type) {
    // 사용자가 즐겨찾기(하트) 버튼을 클릭했을 때 실행되는 액션 처리
    case ACTION_CLICKED_FAVORITE:
      // 타입 가드를 사용하여 ClickFavoriteAction인지 확인
      if ('clicked' in action && typeof action.clicked === 'string') {
        // 이미 해당 아이템이 즐겨찾기 목록에 있는지 확인
        const hasItem = state.favorites.includes(action.clicked);

        if (hasItem) {
          // 이미 즐겨찾기 목록에 있다면, 해당 아이템을 목록에서 제거
          // filter를 사용하여 action.clicked와 일치하지 않는 아이템만 남김
          const favorites = state.favorites.filter(
            (item: string) => item !== action.clicked
          );
          // 새로운 상태 객체를 반환 (불변성 유지)
          const returnState = {
            ...state,
            favorites: favorites,
          };
          console.log("[Redux reducer] favoriteReducer", returnState);
          return returnState;
        } else {
          // 즐겨찾기 목록에 없다면, 해당 아이템을 목록에 추가
          // spread 연산자를 사용하여 기존 배열에 새 아이템을 추가
          const returnState = {
            ...state,
            favorites: [...state.favorites, action.clicked],
          };
          console.log("[Redux reducer] favoriteReducer", returnState);
          return returnState;
        }
      }
      return state;
    // 처리하지 않는 액션 타입일 경우, 기존 상태를 그대로 반환
    default:
      return state;
  }
};

export default favoriteReducer;
