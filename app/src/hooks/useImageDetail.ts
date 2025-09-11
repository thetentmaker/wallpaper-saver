import * as FileSystem from "expo-file-system";

const useImageDetail = () => {
  const onPressDownload = async (imageUrl: string) => {
    const fileUri =
      FileSystem.documentDirectory! + Date.now() + ".jpg";
    try {
      const result = await FileSystem.downloadAsync(imageUrl, fileUri);
      console.log("다운로드 완료:", result);
    } catch (error) {
      console.log("다운로드 중 에러 발생:", error);
    }
  };

  return {
    onPressDownload,
  };
};

export default useImageDetail;
