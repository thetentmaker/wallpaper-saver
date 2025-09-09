import { StyleSheet, View } from "react-native";
import { Typography } from "../components/Typography";

const ImageListScreen = () => {
  return (
    <View style={styles.container}>
      <Typography weight="bold" variant="h1">
        IMAGE LIST
      </Typography>
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
});