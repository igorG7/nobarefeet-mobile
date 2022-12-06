import { NavigationContainer } from "@react-navigation/native";
import UserProvider from "./context/UserProvider";
import NavigationScreens from "./navigation/NavigationScreens";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <NavigationScreens />
      </NavigationContainer>
    </UserProvider>
  );
}
