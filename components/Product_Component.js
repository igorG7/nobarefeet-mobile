import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { importAD } from "../services/productServices";

export default function Product_Component({ navigation }) {
  const [dataAnnouncement, setDataAnnouncement] = useState([]);

  useEffect(() => {
    importAD().then((res) => {
      console.log(res);
      setDataAnnouncement(res);
    });
  }, []);

  return (
    <>
      <Pressable onPress={() => navigation.navigate("Produto")}>
        {dataAnnouncement.map((el) => (
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
        ))}
      </Pressable>
    </>
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
