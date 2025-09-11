import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../designsystem/Button";
import { Header } from "../designsystem/Header";
import { DownloadIcon } from "../designsystem/Icons";
import { RemoteImage } from "../designsystem/RemoteImage";
import { RootStackNavigationProp } from "../navigation/\bRootStackNavigation";

const ImageDetailScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute();
  const imageUrl = route.params as { imageUrl: string };
  const { width } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Header>
        <Header.Icon name="arrow-back" onPress={() => navigation.goBack()} />
        <Header.Title>IMAGE DETAIL</Header.Title>
      </Header>
      <View style={styles.content}>
        <RemoteImage
          uri={imageUrl.imageUrl}
          width={width * 0.98}
          height={width * 1.5}
        />
      </View>
      {/* 하단 버튼의 하단 여백을 bottom 값으로 설정해줘 */}
      <Button style={[styles.downloadButton, {bottom: bottom}]} onPress={() => {}}>
        <Text style={styles.downloadButtonText}>DOWNLOAD</Text>
        <DownloadIcon size={20} color="#fff" style={styles.downloadButtonIcon} />
      </Button>
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
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#000",
  },
  downloadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  downloadButtonIcon: {
    marginBottom: 10
  },
});
