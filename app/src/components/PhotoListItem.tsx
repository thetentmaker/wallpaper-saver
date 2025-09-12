import { useState } from "react";
import { Animated } from "react-native";
import { Button } from "../designsystem/Button";
import { RemoteImage } from "../designsystem/RemoteImage";
import usePhotoListItem from "../hooks/usePhotoListItem";

interface PhotoListItemProps {
  url: string;
  onPressItem?: (url: string) => void;
}

const PhotoListItem = ({ url, onPressItem }: PhotoListItemProps) => {
  const { itemWidth, itemHeight } = usePhotoListItem();
  const [animValue] = useState(new Animated.Value(0));

  const onPressIn = () => {
    Animated.timing(animValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 200,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(animValue, {
      toValue: 0,
      useNativeDriver: true,
      duration: 200,
    }).start();
  };

  // animValue가 0일 때는 1, 1일 때는 0.95
  const scaleAnimation = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.95],
  });

  return (
    <Button
      style={{ paddingVertical: 10, width: itemWidth, alignSelf: "center" }}
      onPress={() => onPressItem?.(url)}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View style={{ transform: [{ scale: scaleAnimation }] }}>
        <RemoteImage
          style={{ transform: [{ scale: 1 }] }}
          uri={url}
          width={itemWidth}
          height={itemHeight}
        />
      </Animated.View>
    </Button>
  );
};

export default PhotoListItem;
