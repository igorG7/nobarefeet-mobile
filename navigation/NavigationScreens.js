import Create_AD from "../pages/Create_AD";
import Desc_Page from "../pages/Desc_Page";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product_Page from "../pages/Product_Page";
import Register from "../pages/Register";
import Header from "../components/Header";
import User_Profile from "../pages/User_Profile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function NavigationScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        title: "",
        headerTransparent: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Perfil" component={User_Profile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Descrição" component={Desc_Page} />
      <Stack.Screen name="Criar Ad" component={Create_AD} />
      <Stack.Screen name="Produto" component={Product_Page} />
      <Stack.Screen name="Registro" component={Register} />
      <Stack.Screen name="Header" component={Header} />
    </Stack.Navigator>
  );
}
