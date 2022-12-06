import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import {
  TextInput,
  RadioButton,
  Divider,
  Button,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import ImagePicker from "react-native-image-picker";
import Container from "../components/Container";
import Input from "../components/Input";

import { creatAD } from "../services/productServices";
import { useUser } from "../context/UserProvider";

export default function Create_AD({ navigation }) {
  const [checked, setChecked] = useState("first");

  const { id, name } = useUser();

  const [model, setModel] = useState("Air Max 95");
  const [color, setColor] = useState("Preto");
  const [description, setDescription] = useState(
    "Inspirado no corpo humano e na estética de atletismo dos anos 90, o Air Max 95 combina conforto surpreendente com estilo rápido. Os painéis laterais ondulados adicionam fluxo de ar natural a qualquer outfit, enquanto a unidade Nike Air visível no calcanhar e no antepé proporciona conforto e desempenho."
  );
  const [brand, setBrand] = useState("Nike");
  const [size, setSize] = useState("38");
  const [price, setPrice] = useState("549,99");

  const [conservation, setConservation] = useState("Novo");
  const [original, setOriginal] = useState("Sim");
  const [acceptChange, setAcceptChange] = useState("Não");

  const handleSubmitAd = () => {
    creatAD({
      urlImg:
        "https://cf.shopee.com.br/file/43a919af3de2e414b47a10f272254c6a_tn",
      model: model,
      color: color,
      description: description,
      brand: brand,
      size: size,
      price: price,
      userID: id,
      nameAdvertiser: name,
      conservation: conservation,
      original: original,
      acceptChange: acceptChange,
    }).then((res) => {
      console.log(res);

      if (res) {
        if (res) {
          Alert.alert("Tudo certo!", "O seu anúncio foi criado com sucesso.", [
            {
              text: "Ok",
              onPress: () => navigation.navigate("Perfil"),
            },
          ]);
        } else {
          Alert.alert("Não foi possivel criar seu anúncio");
        }
      }
    });
  };

  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.body}>
            <View>
              <Text style={styles.title_text}>Vamos criar seu anúncio!</Text>
              <Text style={styles.secondary_text}>
                Preencha os campos conforme as características do seu produto.
              </Text>
              <Pressable
                style={styles.press}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.arrow_left}
                  source={require("../assets/arrow-left.png")}
                />
              </Pressable>
            </View>

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Modelo *</Text>
              <Input
                value={model}
                placeholder={"Nome do modelo"}
                onChangeText={(text) => setModel(text)}
              />
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Cor *</Text>
              <Input
                value={color}
                placeholder={"Insira a cor do produto"}
                onChangeText={(text) => setColor(text)}
              />
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Descrição *</Text>
              <View style={styles.textAreaContainer}>
                <Input
                  value={description}
                  tyle={styles.textArea}
                  underlineColor="transparent"
                  placeholder="Adicione a descrição do produto aqui"
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline={true}
                  onChangeText={(text) => setDescription(text)}
                />
              </View>
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Estado de conservação *</Text>
              <View style={styles.view_radioB}>
                <View style={styles.radio_align}>
                  <RadioButton
                    value="Novo"
                    status={conservation === "Novo" ? "checked" : "unchecked"}
                    onPress={() => setConservation("Novo")}
                  />
                  <Text>Novo</Text>
                </View>

                <View style={styles.radio_align}>
                  <RadioButton
                    value="Usado"
                    status={conservation === "Usado" ? "checked" : "unchecked"}
                    onPress={() => setConservation("Usado")}
                  />
                  <Text>Usado</Text>
                </View>
              </View>
              <Card>
                <Card.Content>
                  <Paragraph>
                    A categoria "novo" se aplica á produtos que ainda estejam na
                    caixa, ou seja, nunca foram usados. Aos produtos usados
                    poucas vezes, atribui-se a categoria "usado".
                  </Paragraph>
                </Card.Content>
              </Card>
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Marca *</Text>
              <Input
                value={brand}
                placeholder={"Marca do modelo"}
                onChangeText={(text) => setBrand(text)}
              />

              <View style={styles.radio_align}>
                <RadioButton
                  value="Sem marca"
                  status={checked === "Sem marca" ? "checked" : "unchecked"}
                  onPress={() => setChecked("Sem marca")}
                />
                <Text>Sem marca</Text>
              </View>
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Original *</Text>
              <View style={styles.view_radioB}>
                <View style={styles.radio_align}>
                  <RadioButton
                    value="Sim"
                    status={original === "Sim" ? "checked" : "unchecked"}
                    onPress={() => setOriginal("Sim")}
                  />
                  <Text>Sim</Text>
                </View>

                <View style={styles.radio_align}>
                  <RadioButton
                    value="Não"
                    status={original === "Não" ? "checked" : "unchecked"}
                    onPress={() => setOriginal("Não")}
                  />
                  <Text>Não</Text>
                </View>
              </View>
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Tamanho *</Text>
              <Input
                value={size}
                placeholder={"Tamanho do modelo"}
                keyboardType={"numeric"}
                onChangeText={(text) => setSize(text)}
              />
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Aceita trocas *</Text>
              <View style={styles.view_radioB}>
                <View style={styles.radio_align}>
                  <RadioButton
                    value="Sim"
                    status={acceptChange === "Sim" ? "checked" : "unchecked"}
                    onPress={() => setAcceptChange("Sim")}
                  />
                  <Text>Sim</Text>
                </View>

                <View style={styles.radio_align}>
                  <RadioButton
                    value="Não"
                    status={acceptChange === "Não" ? "checked" : "unchecked"}
                    onPress={() => setAcceptChange("Não")}
                  />
                  <Text>Não</Text>
                </View>
              </View>
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Preço *</Text>
              <Input
                value={price}
                placeholder={"0,00"}
                keyboardType={"numeric"}
                onChangeText={(text) => setPrice(text)}
                left={<TextInput.Icon icon="currency-brl" />}
              />
            </View>

            <View>
              <Button mode="contained" onPress={handleSubmitAd}>
                Publicar
              </Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const styles = StyleSheet.create({
  body: {
    marginVertical: 64,
    marginHorizontal: 16,
    position: "relative",
  },

  press: {
    position: "absolute",
    top: -20,
  },

  arrow_left: {
    width: 20,
    height: 20,
  },

  title_text: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 8,
  },

  secondary_text: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 8,
  },
  textAreaContainer: {
    marginTop: 8,
    borderColor: "#ebebeb",
    borderWidth: 1,
    padding: 2,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
  },

  texts_views: {
    fontSize: 18,
    fontWeight: "bold",
  },

  view_radioB: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },

  radio_align: {
    flexDirection: "row",
    alignItems: "center",
  },

  content_views: {
    marginVertical: 16,
  },
});
