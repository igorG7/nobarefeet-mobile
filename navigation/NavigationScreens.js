import Create_AD from "../pages/Create_AD";
import Desc_Page from "../pages/Desc_Page";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product_Page from "../pages/Product_Page";
import Register from "../pages/Register";
import Header from "../components/Header";
import User_Profile from "../pages/User_Profile";
import User_ADS_List from "../pages/User_ADS_List";
import Prod_Management from "../pages/Prod_Management";
import Edit_Ad from "../pages/Edit_Ad";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function NavigationScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen name="Perfil" component={User_Profile} />

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Descrição"
        component={Desc_Page}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Criar Ad"
        component={Create_AD}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen name="Produto" component={Product_Page} />

      <Stack.Screen
        name="Registro"
        component={Register}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen name="Meus anúncios" component={User_ADS_List} />

      <Stack.Screen name="Gerenciar Prod" component={Prod_Management} />

      <Stack.Screen
        name="Editar Ad"
        component={Edit_Ad}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}
