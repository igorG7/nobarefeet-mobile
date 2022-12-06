import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Pressable,
  Button,
} from "react-native";
import Product_Component from "../components/Product_Component";
import Container from "../components/Container";
import Header from "../components/Header";

import { importAD } from "../services/productServices";
import { Divider } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";

export default function Home({ navigation }) {
  const [dataAnnouncement, setDataAnnouncement] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    importAD().then((res) => {
      console.log(res);
      setDataAnnouncement(res);
    });
  }, [isFocused]);

  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Header />
          </View>

          <View style={styles.main}>
            <View>
              <Text>Carrosel aqui</Text>

              <Button
                title="perfil"
                onPress={() => navigation.navigate("Perfil")}
              ></Button>

              <Button
                title="login"
                onPress={() => navigation.navigate("Login")}
              ></Button>
            </View>

            <View style={styles.view_products}>
              <Text style={styles.view_products_text}>
                Procure o produto ideal para você!
              </Text>
              {dataAnnouncement.map((el) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate("Produto", {
                      urlImg: el.urlImg,
                      model: el.model,
                      color: el.color,
                      description: el.description,
                      brand: el.brand,
                      size: el.size,
                      price: el.price,
                      userID: el.userID,
                      nameAdvertiser: el.nameAdvertiser,
                      conservation: el.conservation,
                      original: el.original,
                      acceptChange: el.acceptChange,
                      id: el.id,
                    })
                  }
                >
                  <View>
                    <View style={styles.product_component}>
                      <View style={styles.view_image}>
                        <Image
                          style={styles.tinyLogo}
                          source={{ uri: `${el.urlImg}` }}
                        />
                      </View>

                      <View style={styles.view_text}>
                        <Text style={styles.text_price}>R$ {el.price}</Text>
                        <Text style={styles.text_name_product}>{el.model}</Text>
                        <Text style={styles.text_advertiser_name}>
                          Por: {el.nameAdvertiser}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 8,
    backgroundColor: "#fff",
  },

  view_products: {
    marginTop: 128,
  },

  view_products_text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
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
