import { StyleSheet, View } from "react-native";
import { Header } from "../designsystem/Header";

const ImageDetailScreen = () => {
return (
    <View style={styles.container}>
      <Header>
        <Header.Icon name="arrow-back" />
        <Header.Title>IMAGE DETAIL</Header.Title>
      </Header>
    </View>
  );
};

export default ImageDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});