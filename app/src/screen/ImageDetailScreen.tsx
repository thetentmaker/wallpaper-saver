import { StyleSheet, View } from "react-native";
import { Header } from "../designsystem/Header";
import { RemoteImage } from "../designsystem/RemoteImage";
import useImageDetail from "../hooks/useImageDetail";
import DownloadButton from "./components/DownloadButton";

const ImageDetailScreen = () => {
  const {
    onPressDownload,
    isDownloading,
    getIconName,
    onPressFavorite,
    onPressBack,
    imageInfo,
    bottom,
  } = useImageDetail();

  return (
    <View style={styles.container}>
      <Header>
        <Header.Icon name="arrow-back" onPress={onPressBack} />
        <Header.Title>IMAGE DETAIL</Header.Title>
        <Header.Icon name={getIconName()} onPress={onPressFavorite} />
      </Header>
      <View style={styles.content}>
        <RemoteImage uri={imageInfo.url} width={imageInfo.width} height={imageInfo.height} />
      </View>
      <DownloadButton
        isDownloading={isDownloading}
        bottom={bottom}
        onPress={() => onPressDownload(imageInfo.url)}
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
