import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabIcon } from "../designsystem/TabIcon";
import useBottomTabNavigations from "../hooks/useBottomTabNavigations";
import FavoriteImageListScreen from "../screen/FavoriteImageListScreen";
import ImageListScreen from "../screen/ImageListScreen";

const Tabs = createBottomTabNavigator();

const BottomTabNavigations = () => {
  const { getIconName } = useBottomTabNavigations();
  return (
    <Tabs.Navigator
      screenOptions={(route) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          return (
            <TabIcon
              name={getIconName(route.route.name)}
              focused={focused}
              focusedColor={"tomato"}
              size={16}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="ImageList" component={ImageListScreen} />
      <Tabs.Screen
        name="FavoriteImageList"
        component={FavoriteImageListScreen}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigations;
