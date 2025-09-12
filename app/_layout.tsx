import { Provider } from "react-redux";
import store from "./src/store/store";
import RootStackNavigations from "./src/navigation/RootStackNavigations";

export default function RootLayout() {
  return (
    // <BottomTabNavigations />
    <Provider store={store}>
      <RootStackNavigations />
    </Provider>
  );
}
