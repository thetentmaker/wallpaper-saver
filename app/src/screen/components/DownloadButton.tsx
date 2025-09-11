import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { Button } from "../../designsystem/Button";

const DownloadButton = ({
  isDownloading,
  bottom,
  onPress,
}: {
  isDownloading: boolean;
  bottom: number;
  onPress: () => void;
}) => {
  return (
    <Button
      disabled={isDownloading}
      style={[styles.downloadButton, { bottom: bottom }]}
      onPress={onPress}
    >
      {isDownloading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          <Text style={styles.downloadButtonText}>DOWNLOAD</Text>
        </>
      )}
    </Button>
  );
};

export default DownloadButton;

const styles = StyleSheet.create({
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
    marginBottom: 10,
  },
});
