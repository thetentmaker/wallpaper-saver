import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { Header } from "../designsystem/Header";
import { RemoteImage } from "../designsystem/RemoteImage";
import { RootStackNavigationProp } from "../navigation/\bRootStackNavigation";

const ImageDetailScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute();
  const imageUrl = route.params as { imageUrl: string };
  const { width } = useWindowDimensions();
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
