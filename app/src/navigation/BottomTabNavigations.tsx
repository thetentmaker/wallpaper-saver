import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabIcon } from "../designsystem/TabIcon";
import FavoriteImageListScreen from "../screen/FavoriteImageListScreen";
import ImageListScreen from "../screen/ImageListScreen";

const Tabs = createBottomTabNavigator();

const BottomTabNavigations = () => {
  return (
    <Tabs.Navigator
      screenOptions={(route) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const iconName = getIconName(route.route.name);
          return (
            <TabIcon
              name={iconName}
              focused={focused}
              focusedColor={"tomato"}
              color={"gray"}
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
