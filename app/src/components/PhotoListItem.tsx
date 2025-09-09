import { useWindowDimensions } from "react-native";
import { Button } from "../designsystem/Button";
import { RemoteImage } from "../designsystem/RemoteImage";

interface PhotoListItemProps {
  url: string;
  onPressItem: () => void;
}
const PhotoListItem = ({ url, onPressItem }: PhotoListItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <Button onPress={onPressItem} style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <RemoteImage uri={url} width={width - 40} height={width * 1.2} />
    </Button>
  );
};

export default PhotoListItem;
