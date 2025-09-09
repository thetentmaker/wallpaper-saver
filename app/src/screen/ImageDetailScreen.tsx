import { StyleSheet, View } from "react-native";
import { Typography } from "../components/Typography";

const ImageDetailScreen = () => {
return (
    <View style={styles.container}>
      <Typography weight="bold" variant="h1">
        IMAGE DETAIL
      </Typography>
    </View>
  );
};

export default ImageDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});