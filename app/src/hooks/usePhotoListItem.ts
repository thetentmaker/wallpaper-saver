import { useWindowDimensions } from "react-native";

const usePhotoListItem = () => {
  const { width } = useWindowDimensions();
  const itemWidth = width - 40;
  const itemHeight = itemWidth * 1.2;
  return {
    itemWidth,
    itemHeight,
  };
};

export default usePhotoListItem;