import { useNavigation, useRoute } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";
import { Alert, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { onClickFavorite } from "../actions/favorite";
import { RootStackNavigationProp } from "../navigation/\bRootStackNavigation";
import { RootState } from "../store/store";

const useImageDetail = () => {
  const { bottom } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const route = useRoute();
  const { imageUrl } = route.params as { imageUrl: string };
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const navigation = useNavigation<RootStackNavigationProp>();
  const isFavorite = useSelector((state: RootState) => {
    const result = state.favorite.favorites.includes(imageUrl);
    console.log("[Redux hook] useSelector isFavorite:", result, "imageUrl:", imageUrl, "favorites:", state.favorite.favorites);
    return result;
  });

  const onPressFavorite = () => {
    console.log("[Redux hook] useImageDetail onPressFavorite", imageUrl);
    dispatch(onClickFavorite(imageUrl));
  };

  const onPressDownload = async (imageUrl: string) => handleDownload(imageUrl);

  const handleDownload = async (imageUrl: string) => {
    try {
      showLoading();

      // 1. 권한 확인 및 요청
      const hasPermission = await requestMediaLibraryPermission();
      if (!hasPermission) {
        hideLoading();
        return;
      }

      // 2. 이미지 다운로드
      const fileUri = await downloadImageToFile(imageUrl);
      if (!fileUri) {
        hideLoading();
        return;
      }

      // 3. 앨범에 저장
      await MediaLibrary.saveToLibraryAsync(fileUri);
      Alert.alert("이미지가 앨범에 저장되었습니다.");
    } catch (error) {
      console.log("다운로드 중 에러 발생:", error);
      Alert.alert("이미지 저장 중 오류가 발생했습니다.");
    } finally {
      hideLoading();
    }
  };

  const hideLoading = () => setIsDownloading(false);
  const showLoading = () => setIsDownloading(true);

  const requestMediaLibraryPermission = async (): Promise<boolean> => {
    let permission = await MediaLibrary.getPermissionsAsync(true);
    console.log("권한 확인:", permission);

    if (permission.status === "denied") {
      Alert.alert("권한이 거절되었습니다. 설정에서 권한을 허용해주세요.");
      return false;
    }

    if (permission.status === "undetermined") {
      const requestResult = await MediaLibrary.requestPermissionsAsync();
      console.log("권한 요청 결과:", requestResult);
      if (requestResult.status === "denied") {
        Alert.alert("권한이 거절되었습니다. 설정에서 권한을 허용해주세요.");
        return false;
      }
    }

    return true;
  };

  const downloadImageToFile = async (
    imageUrl: string
  ): Promise<string | null> => {
    const fileUri = FileSystem.documentDirectory! + Date.now() + ".jpg";
    try {
      const result = await FileSystem.downloadAsync(imageUrl, fileUri);
      console.log("다운로드 완료:", result);
      return fileUri;
    } catch (error) {
      console.log("이미지 다운로드 실패:", error);
      Alert.alert("이미지 다운로드에 실패했습니다.");
      return null;
    }
  };

  const getIconName = () => isFavorite ? "heart" : "heart-outline";

  const imageInfo = {
    width: width * 0.98,
    height: width * 1.5,
    url: imageUrl,
  }
  return {
    onPressDownload,
    isDownloading,
    getIconName,
    onPressFavorite,
    imageUrl,
    onPressBack: () => navigation.goBack(),
    imageInfo,
    bottom,
  };
};

export default useImageDetail;
