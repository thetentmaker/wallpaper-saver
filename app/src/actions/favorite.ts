export const ACTION_CLICKED_FAVORITE = "ACTION_CLICKED_FAVORITE";

export const onClickFavorite = (clickedItem: string) => {
  console.log("[Redux action] onClickFavorite", clickedItem);
  return {
    type: ACTION_CLICKED_FAVORITE,
    clicked: clickedItem,
  };
};
