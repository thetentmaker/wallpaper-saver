import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabIcon } from "../components/TabIcon";
import FavoriteImageListScreen from "../screen/FavoriteImageListScreen";
import ImageListScreen from "../screen/ImageListScreen";

const Tabs = createBottomTabNavigator();

const BottomTabNavigations = () => {
  return (
    <Tabs.Navigator
      screenOptions={(route) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          const iconName = getIconName(route.route.name);
          const iconColor = focused ? "tomato" : "gray";
          return (
            <TabIcon
              name={iconName}
              focused={focused}
              color={iconColor}
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

const getIconName = (name: string): string => {
  switch (name) {
    case "ImageList":
      return "home";
    case "FavoriteImageList":
      return "heart";
    default:
      return "";
  }
};

export default BottomTabNavigations;
