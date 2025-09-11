import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import PhotoListItem from "../components/PhotoListItem";
import { IMAGE_LIST } from "../data/constants";
import { Header } from "../designsystem/Header";
import { RootStackNavigationProp } from "../navigation/RootStackNavigation";

const ImageListScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const onPressItem = (imageUrl: string) => {
    navigation.navigate("ImageDetail", { imageUrl });
  };
  return (
    <View style={styles.container}>
      <Header>
        <Header.Title>IMAGE LIST</Header.Title>
      </Header>
      <FlatList
        data={IMAGE_LIST}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item: url }) => (
          <PhotoListItem url={url} onPressItem={onPressItem} />
        )}
      />
    </View>
  );
};

export default ImageListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
