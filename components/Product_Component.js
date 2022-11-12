import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Product_Component() {
  return (
    <View>
      <View style={styles.product_component}>
        <View style={styles.view_image}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/tenis.png")}
          />
        </View>

        <View style={styles.view_text}>
          <Text style={styles.text_price}>R$ 90,00</Text>
          <Text style={styles.text_name_product}>Nike sb checksolar </Text>
          <Text style={styles.text_advertiser_name}>
            Anunciante: Igor Giovane
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },

  product_component: {
    flexDirection: "row",
    backgroundColor: "#a6294d",
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginVertical: 8,
    borderRadius: 16,
  },

  text_price: {
    fontWeight: "bold",
    fontSize: 22,
  },

  text_name_product: {
    fontSize: 20,
  },

  text_advertiser_name: {
    fontSize: 15,
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
