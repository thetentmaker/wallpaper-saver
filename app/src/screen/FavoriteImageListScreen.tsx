import { StyleSheet, View } from "react-native";
import { Typography } from "../components/Typography";

const FavoriteImageListScreen = () => {
  return (
    <View style={styles.container}>
      <Typography weight="bold" variant="h1">
        FAVORITE IMAGE LIST
      </Typography>
    </View>
  );
};

export default FavoriteImageListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});