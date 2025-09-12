import { FlatList, StyleSheet, View } from "react-native";
import PhotoListItem from "../components/PhotoListItem";
import { Header } from "../designsystem/Header";
import { Typography } from "../designsystem/Typography";
import useFavoriteImageList from "../hooks/useFavoriteImageList";

const FavoriteImageListScreen = () => {
  const { imageList, onPressItem } = useFavoriteImageList();
  return (
    <View style={styles.container}>
      <Header>
        <Header.Title>FAVORITE IMAGE LIST</Header.Title>
      </Header>
      {imageList.length === 0 ? (
        <Typography style={styles.emptyText} weight="bold" variant="h1">
          NO FAVORITE IMAGE
        </Typography>
      ) : (
        <FlatList
          style={styles.flatList}
          data={imageList}
          renderItem={({ item }) => <PhotoListItem url={item} onPressItem={onPressItem} />}
        />
      )}
    </View>
  );
};

export default FavoriteImageListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  emptyText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
    color: "#666",
  },
});
