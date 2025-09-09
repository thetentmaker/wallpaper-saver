import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  ImageDetail: { imageUrl: string };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
