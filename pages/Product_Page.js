import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { Button, Divider } from "react-native-paper";
import Product_Component from "../components/Product_Component";
import Container from "../components/Container";
import Header from "../components/Header";

export default function Product_Page({ navigation, route }) {
  const dataAnnouncement = route.params;

  const model = dataAnnouncement.model;
  const urlImg = dataAnnouncement.urlImg;
  const color = dataAnnouncement.color;
  const description = dataAnnouncement.description;
  const brand = dataAnnouncement.brand;
  const size = dataAnnouncement.size;
  const price = dataAnnouncement.price;
  const nameAdvertiser = dataAnnouncement.nameAdvertiser;
  const conservation = dataAnnouncement.conservation;
  const original = dataAnnouncement.original;
  const acceptChange = dataAnnouncement.acceptChange;
  const id = dataAnnouncement.id;
  const userID = dataAnnouncement.userID;

  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <View>
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

              <View>
                <Image style={styles.image} source={{ uri: `${urlImg}` }} />
              </View>

              <View style={styles.view_infos}>
                <View style={styles.view_nameProduct}>
                  <Text style={styles.text_name_product}>{model}</Text>
                  <Text style={styles.text_color}>{color}</Text>
                </View>

                <View>
                  <Divider />
                  <Pressable
                    onPress={() =>
                      navigation.navigate("Descrição", {
                        urlImg: urlImg,
                        model: model,
                        color: color,
                        description: description,
                        brand: brand,
                        size: size,
                        price: price,
                        userID: userID,
                        nameAdvertiser: nameAdvertiser,
                        conservation: conservation,
                        original: original,
                        acceptChange: acceptChange,
                        id: id,
                      })
                    }
                  >
                    <View style={styles.view_description}>
                      <Text style={styles.text_descri}>
                        Descrição do Produto
                      </Text>

                      <Image
                        style={styles.icon_arrow}
                        source={require("../assets/right-arrow.png")}
                      />
                    </View>
                  </Pressable>
                  <Divider />
                </View>

                <View style={styles.view_price}>
                  <Text style={styles.price}>R$ {price}</Text>
                  <Text>Por: {nameAdvertiser}</Text>
                </View>

                <Divider />

                <View style={styles.view_button}>
                  <Button
                    style={styles.buttons}
                    icon="whatsapp"
                    mode="contained"
                    onPress={() => console.log("Pressed")}
                  >
                    Entrar em contato
                  </Button>
                  <Button
                    icon="cart"
                    mode="elevated"
                    onPress={() => console.log("Pressed")}
                  >
                    Adicionar ao carrinho
                  </Button>
                </View>

                <Divider />

                <View style={styles.view_more_prod}>
                  <Text style={styles.text_more_product}>
                    Talvez você também goste
                  </Text>
                  <Pressable onPress={() => navigation.push("Produto")}>
                    <Product_Component />
                    <Product_Component />
                  </Pressable>
                </View>
              </View>
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

  // view_infos: {
  //   padding: 8,
  // },

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

  view_nameProduct: {
    paddingHorizontal: 8,
    marginVertical: 8,
  },

  image: {
    width: 344,
    height: 344,
  },

  icon_arrow: {
    width: 15,
    height: 15,
  },

  view_description: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },

  text_descri: {
    fontSize: 18,
  },

  text_name_product: {
    fontSize: 22,
  },

  text_color: { fontSize: 18 },

  price: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  view_price: {
    marginVertical: 16,
    paddingHorizontal: 8,
  },

  view_button: {
    padding: 8,
    marginVertical: 8,
  },

  buttons: { marginBottom: 16 },

  text_more_product: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },

  view_more_prod: {
    marginVertical: 16,
  },
});
