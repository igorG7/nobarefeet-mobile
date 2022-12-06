import { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";

import { Divider, Button } from "react-native-paper";
import Product_Component from "../components/Product_Component";
import Container from "../components/Container";
import Header from "../components/Header";

import { useUser } from "../context/UserProvider";
import { adsUser } from "../services/productServices";

export default function Home({ navigation }) {
  const { name, id } = useUser();
  const [dataUser, setDataUser] = useState([]);

  const userID = id;

  return (
    <Container>
      <View>
        <SafeAreaView>
          <ScrollView>
            <View>
              <Header />
            </View>

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

                <Text> Olá {name}</Text>
              </View>

              <Divider />

              <Button
                icon="plus-box-outline"
                mode="contained"
                onPress={() => navigation.navigate("Criar Ad")}
              >
                Criar anúncio
              </Button>

              <View>
                <Text style={styles.ad_text}>Meus anúncios</Text>
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
