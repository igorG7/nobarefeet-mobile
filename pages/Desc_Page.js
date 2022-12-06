import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { Button } from "react-native-paper";
import Container from "../components/Container";
import Input from "../components/Input";

export default function Desc_Page({ navigation, route }) {
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
          <View style={styles.main}>
            <View>
              <View style={styles.view_title}>
                <Pressable onPress={() => navigation.goBack()}>
                  <Image
                    style={styles.arrow_left}
                    source={require("../assets/arrow-left.png")}
                  />
                </Pressable>
                <Text style={styles.text_title}>Descrição do produto</Text>
              </View>
              <View>
                <View style={styles.view_items_desc}>
                  <Text style={styles.item_desc}>Modelo: </Text>
                  <Text style={styles.content_desc}>{model}</Text>
                </View>
                <View style={styles.view_items_desc}>
                  <Text style={styles.item_desc}>Cor: </Text>
                  <Text style={styles.content_desc}>{color}</Text>
                </View>
                <View style={styles.view_items_desc}>
                  <Text style={styles.item_desc}>Marca: </Text>
                  <Text style={styles.content_desc}>{brand}</Text>
                </View>
                <View style={styles.view_items_desc}>
                  <Text style={styles.item_desc}>Estado: </Text>
                  <Text style={styles.content_desc}>{conservation}</Text>
                </View>
                <View style={styles.view_items_desc}>
                  <Text style={styles.item_desc}>Tamanho: </Text>
                  <Text style={styles.content_desc}>{size}</Text>
                </View>
                <View style={styles.view_items_desc}>
                  <Text style={styles.item_desc}>Aceita troca: </Text>
                  <Text style={styles.content_desc}>{acceptChange}</Text>
                </View>
                <View style={styles.view_items_desc}>
                  <Text style={styles.item_desc}>Original: </Text>
                  <Text style={styles.content_desc}>{original}</Text>
                </View>
              </View>
            </View>

            <View style={styles.more_infos}>
              <Text style={styles.text_more_infos}>{description}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 16,
  },

  arrow_left: {
    width: 20,
    height: 20,
  },

  view_title: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 32,
  },

  text_title: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 40,
  },

  view_items_desc: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },

  item_desc: {
    fontWeight: "bold",
    fontSize: 16,
  },

  content_desc: {
    fontSize: 16,
  },

  more_infos: {
    marginTop: 64,
  },

  text_more_infos: {
    fontSize: 16,
  },
});
