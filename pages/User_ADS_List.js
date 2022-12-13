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

import { Divider, Button, List } from "react-native-paper";
import Product_Component from "../components/Product_Component";
import Container from "../components/Container";

import { useIsFocused } from "@react-navigation/native";
import { useUser } from "../context/UserProvider";
import { adsUser } from "../services/productServices";

export default function Home({ navigation }) {
  const { name, id } = useUser();
  const [dataUser, setDataUser] = useState([]);
  const userID = id;

  const isFocused = useIsFocused();

  useEffect(() => {
    adsUser(userID).then((res) => {
      setDataUser(res);
    });
  }, [isFocused]);

  return (
    <Container>
      <View>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.main}>
              <View>
                <Pressable onPress={() => navigation.goBack()}>
                  <View style={styles.view_back}>
                    <Image
                      style={styles.arrow_left}
                      source={require("../assets/arrow-left.png")}
                    />

                    <Text style={{ fontSize: 16 }}>Voltar</Text>
                  </View>
                </Pressable>
              </View>

              <View style={styles.view_title}>
                <Text style={styles.text_title}>
                  Esses são os anúncios que você criou!
                </Text>
              </View>

              <View>
                <Divider />
                {dataUser.map((el) => (
                  <Pressable
                    onPress={() =>
                      navigation.navigate("Gerenciar Prod", {
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
                        status: el.status,
                      })
                    }
                  >
                    <View style={styles.product_component}>
                      <View style={styles.view_image}>
                        <Image
                          style={styles.tinyLogo}
                          source={{ uri: `${el.urlImg}` }}
                        />
                      </View>

                      <View style={styles.view_text}>
                        <View>
                          <Text style={styles.text_price}>R$ {el.price}</Text>
                          <Text style={styles.text_name_product}>
                            {el.model}
                          </Text>
                        </View>

                        <View>
                          <Text style={styles.text_advertiser_name}>
                            Status:
                            {el.status == true ? "Ativo" : "Encerrado"}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                ))}
                <Divider />
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
    marginVertical: 16,
  },

  arrow_left: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },

  view_title: {
    alignItems: "center",
    marginBottom: 32,
  },

  text_title: {
    fontSize: 18,
  },

  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },

  product_component: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginVertical: 8,
  },

  text_price: {
    fontWeight: "bold",
    fontSize: 20,
  },

  text_name_product: {
    fontSize: 20,
  },

  text_advertiser_name: {
    fontSize: 13,
  },

  view_image: {},

  view_text: {
    padding: 16,
    justifyContent: "space-between",
  },
});
