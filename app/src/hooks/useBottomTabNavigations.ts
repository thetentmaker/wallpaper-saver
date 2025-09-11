const useBottomTabNavigations = () => {
  const getIconName = (name: string): string => {
    switch (name) {
      case "ImageList":
        return "home";
      case "FavoriteImageList":
        return "heart";
      default:
        return "";
    }
  };

  return { getIconName };
};

export default useBottomTabNavigations;
