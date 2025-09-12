import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../navigation/\bRootStackNavigation";

const useFavoriteImageList = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  return {
    imageList: useSelector((state: RootState) => state.favorite.favorites),
    navigation: useNavigation<RootStackNavigationProp>(),
    onPressItem: (imageUrl: string) => {
      navigation.navigate("ImageDetail", { imageUrl });
    },
  };
};

export default useFavoriteImageList;