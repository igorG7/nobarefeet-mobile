import { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";

import { Divider, Button, List } from "react-native-paper";
import Container from "../components/Container";

import { useUser } from "../context/UserProvider";

export default function Home({ navigation }) {
  const { name, id, setSigned } = useUser();
  const userID = id;

  const confirmLogout = () => {
    setSigned(false);
    navigation.popToTop();
  };

  const logout = () => {
    Alert.alert("", "Deseja encerrar a sessão com esta conta?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: confirmLogout,
      },
    ]);
  };

  return (
    <Container>
      <View style={styles.align_views}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.main}>
              <Pressable onPress={() => navigation.goBack()}>
                <View style={styles.view_back}>
                  <Image
                    style={styles.arrow_left}
                    source={require("../assets/arrow-left.png")}
                  />

                  <Text style={{ fontSize: 16 }}>Voltar</Text>
                </View>
              </Pressable>

              <View style={styles.profile_view}>
                <View style={styles.userRadius}>
                  <Image source={require("../assets/user.png")} />
                </View>

                <Text style={{ fontSize: 18 }}>Olá</Text>
                <Text style={styles.text_name}>{name}</Text>
              </View>

              <Divider />

              <View style={styles.list_view}>
                <Pressable
                  onPress={() =>
                    navigation.navigate("Editar Perfil", { nameUser: name })
                  }
                >
                  <List.Item
                    title="Editar perfil"
                    right={(props) => (
                      <List.Icon {...props} icon="account-edit-outline" />
                    )}
                  />
                </Pressable>

                <Divider />

                <Pressable onPress={() => navigation.navigate("Criar Ad")}>
                  <List.Item
                    title="Criar anúncio"
                    right={(props) => (
                      <List.Icon {...props} icon="plus-box-outline" />
                    )}
                  />
                </Pressable>

                <Divider />

                <Pressable onPress={() => navigation.navigate("Meus anúncios")}>
                  <List.Item
                    title="Meus anúncios"
                    right={(props) => (
                      <List.Icon {...props} icon="storefront-outline" />
                    )}
                  />
                </Pressable>

                <Divider />

                <Pressable onPress={logout}>
                  <List.Item
                    title="Sair da conta"
                    right={(props) => <List.Icon {...props} icon="logout" />}
                  />
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 8,
    backgroundColor: "#fff",
  },

  text_name: {
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 16,
  },

  view_back: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  arrow_left: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },

  profile_view: {
    margin: 16,
    alignItems: "center",
    flexDirection: "column",
  },

  userRadius: {
    width: 70,
    height: 70,
    backgroundColor: "#EDE8E8",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  ad_text: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 16,
  },

  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },

  product_component: {
    flexDirection: "row",
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginVertical: 8,
    borderRadius: 16,
  },

  text_price: {
    fontWeight: "bold",
    fontSize: 20,
  },

  text_name_product: {
    fontSize: 20,
  },

  text_advertiser_name: {
    fontSize: 12,
    marginTop: 16,
  },

  view_image: {
    marginRight: 64,
    flex: 1,
  },

  view_text: {
    padding: 8,
    flex: 1,
  },
});
