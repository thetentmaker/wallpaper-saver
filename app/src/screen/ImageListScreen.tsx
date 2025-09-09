import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PhotoListItem from "../components/PhotoListItem";
import { IMAGE_LIST } from "../data/constants";
import { Header } from "../designsystem/Header";
import { RootStackNavigationProp } from "../navigation/RootStackNavigation";

const ImageListScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const onPressItem = useCallback((imageUrl: string) => {
    navigation.navigate("ImageDetail", { imageUrl });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Header>
        <Header>
          <Header.Title>IMAGE LIST</Header.Title>
        </Header>
      </Header>
      <FlatList
        data={IMAGE_LIST}
        renderItem={({ item }) => (
          <PhotoListItem url={item} onPressItem={() => onPressItem(item)} />
        )}
      />
      <View style={styles.content}></View>
    </View>
  );
};

export default ImageListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
