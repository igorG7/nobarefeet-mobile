import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";

import { useUser } from "../context/UserProvider";

export default function Header({ navigation }) {
  const { signed } = useUser();
  const iconUser = "account";
  const iconLogin = "login";

  function redirectLogin() {
    navigation.navigate("Login");
  }

  function redirectProfileUser() {
    navigation.navigate("Perfil");
  }

  function redirectSearch() {
    navigation.navigate("Busca");
  }

  return (
    <View>
      <Appbar.Header style={styles.header}>
        <Appbar.Content
          title="NOBAREFEET"
          onPress={() => navigation.popToTop()}
        />
        <Appbar.Action icon="magnify" onPress={redirectSearch} />

        <Appbar.Action icon="cart" />
        <Appbar.Action
          icon={signed == true ? iconUser : iconLogin}
          onPress={signed == true ? redirectProfileUser : redirectLogin}
        />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},

  title: {
    fontSize: 16,
  },
});
