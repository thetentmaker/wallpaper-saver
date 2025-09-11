import { Button } from "../designsystem/Button";
import { RemoteImage } from "../designsystem/RemoteImage";
import usePhotoListItem from "../hooks/usePhotoListItem";

interface PhotoListItemProps {
  url: string;
  onPressItem: (url: string) => void;
}

const PhotoListItem = ({ url, onPressItem }: PhotoListItemProps) => {
  const { itemWidth, itemHeight } = usePhotoListItem();

  return (
    <Button
      onPress={() => onPressItem(url)}
      style={{ paddingVertical: 10, width: itemWidth, alignSelf: 'center' }}
    >
      <RemoteImage uri={url} width={itemWidth} height={itemHeight} />
    </Button>
  );
};

export default PhotoListItem;
