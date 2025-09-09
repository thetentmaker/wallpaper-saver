import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteImageListScreen from "../screen/FavoriteImageListScreen";
import BottomTabNavigations from "./BottomTabNavigations";
const Stack = createNativeStackNavigator();
const RootStackNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigations} />
      <Stack.Screen name="ImageDetail" component={FavoriteImageListScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigations;
