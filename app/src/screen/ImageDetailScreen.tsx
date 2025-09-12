import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { onClickFavorite } from "../actions/favorite";
import { Header } from "../designsystem/Header";
import { RemoteImage } from "../designsystem/RemoteImage";
import useImageDetail from "../hooks/useImageDetail";
import { RootStackNavigationProp } from "../navigation/\bRootStackNavigation";
import { RootState } from "../store/store";
import DownloadButton from "./components/DownloadButton";

const ImageDetailScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute();
  const { imageUrl } = route.params as { imageUrl: string };
  const { width } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const { onPressDownload, isDownloading } = useImageDetail();
  const dispatch = useDispatch();

  const onPressFavorite = () => dispatch(onClickFavorite(imageUrl));

  const isFavorite = useSelector((state: RootState) =>
    state.favorite.favorites.includes(imageUrl)
  );
  
  return (
    <View style={styles.container}>
      <Header>
        <Header.Icon name="arrow-back" onPress={() => navigation.goBack()} />
        <Header.Title>IMAGE DETAIL</Header.Title>
        <Header.Icon
          name={isFavorite ? "heart" : "heart-outline"}
          onPress={onPressFavorite}
        />
      </Header>
      <View style={styles.content}>
        <RemoteImage uri={imageUrl} width={width * 0.98} height={width * 1.5} />
      </View>
      <DownloadButton
        isDownloading={isDownloading}
        bottom={bottom}
        onPress={() => onPressDownload(imageUrl)}
      />
    </View>
  );
};

export default ImageDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
});
