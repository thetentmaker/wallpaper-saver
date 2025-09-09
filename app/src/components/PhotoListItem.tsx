import { useCallback } from "react";
import { useWindowDimensions } from "react-native";
import { Button } from "../designsystem/Button";
import { RemoteImage } from "../designsystem/RemoteImage";

const PhotoListItem = ({ url }: { url: string }) => {
  const { width } = useWindowDimensions();

  const onPressItem = useCallback(() => {
    console.log("onPressItem");
  }, []);

  return (
    <Button onPress={onPressItem} style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <RemoteImage uri={url} width={width - 40} height={width * 1.2} />
    </Button>
  );
};

export default PhotoListItem;
