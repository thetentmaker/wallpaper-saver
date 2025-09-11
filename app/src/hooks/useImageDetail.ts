import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";

const useImageDetail = () => {
  const onPressDownload = async (imageUrl: string) => handleDownload(imageUrl);
  
  const handleDownload = async (imageUrl: string) => {
    try {
      // 1. 권한 확인 및 요청
      const hasPermission = await requestMediaLibraryPermission();
      if (!hasPermission) return;

      // 2. 이미지 다운로드
      const fileUri = await downloadImageToFile(imageUrl);
      if (!fileUri) return;

      // 3. 앨범에 저장
      await MediaLibrary.saveToLibraryAsync(fileUri);
      Alert.alert("이미지가 앨범에 저장되었습니다.");
    } catch (error) {
      console.log("다운로드 중 에러 발생:", error);
      Alert.alert("이미지 저장 중 오류가 발생했습니다.");
    }
  };

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

  return {
    onPressDownload,
  };
};

export default useImageDetail;
