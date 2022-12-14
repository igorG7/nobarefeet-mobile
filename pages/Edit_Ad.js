import { useState, useEffect } from "react";
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
  Paragraph,
} from "react-native-paper";
import ImagePicker from "react-native-image-picker";
import Container from "../components/Container";
import Input from "../components/Input";
import { MaskInput } from "../components/Input";

import { updateAD, getInfosAD } from "../services/productServices";
import { UserContext } from "../context/UserProvider";

export default function Edit_Ad({ navigation, route }) {
  const dataAnnouncement = route.params;
  const id = dataAnnouncement.id;

  const [checked, setChecked] = useState();
  const [model, setModel] = useState();
  const [color_edit, setColor_edit] = useState();
  const [description_edit, setDescription_edit] = useState();
  const [brand_edit, setBrand_edit] = useState();
  const [size_edit, setSize_edit] = useState();
  const [price_edit, setPrice_edit] = useState();

  const [conservation_edit, setConservation_edit] = useState();
  const [original_edit, setOriginal_edit] = useState();
  const [acceptChange_edit, setAcceptChange_edit] = useState();

  useEffect(() => {
    getInfosAD(id).then((res) => {
      setModel(res.model);
      setColor_edit(res.color);
      setDescription_edit(res.description);
      setBrand_edit(res.brand);
      setSize_edit(res.size);
      setPrice_edit(res.price);
      setConservation_edit(res.conservation);
      setOriginal_edit(res.original);
      setAcceptChange_edit(res.acceptChange);
    });
  }, []);

  const handleUpdateAd = () => {
    updateAD(id, {
      modelo: model,
      cor: color_edit,
      descricao: description_edit,
      marca: brand_edit,
      tamanho: size_edit,
      preco: price_edit,
      condicao: conservation_edit,
      tipo_produto: original_edit,
      aceitaTroca: acceptChange_edit,
    }).then((res) => {
      console.log(res);

      if (res) {
        if (res) {
          Alert.alert(
            "Tudo certo!",
            "As informa????es foram alteradas com sucesso.",
            [
              {
                text: "Ok",
                onPress: () => navigation.navigate("Meus an??ncios"),
              },
            ]
          );
        } else {
          Alert.alert(
            "Aten????o",
            "N??o foi possivel alterar as informa????es do seu seu an??ncio."
          );
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
              <Text style={styles.title_text}>Editar An??ncio</Text>
              <Text style={styles.secondary_text}>
                Aqui voc?? pode alterar informa????es referentes ao seu produto.
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
                value={color_edit}
                placeholder={"Insira a cor do produto"}
                onChangeText={(text) => setColor_edit(text)}
              />
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Descri????o *</Text>
              <View style={styles.textAreaContainer}>
                <Input
                  value={description_edit}
                  tyle={styles.textArea}
                  underlineColor="transparent"
                  placeholder="Adicione a descri????o do produto aqui"
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline={true}
                  onChangeText={(text) => setDescription_edit(text)}
                />
              </View>
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Estado de conserva????o *</Text>
              <View style={styles.view_radioB}>
                <View style={styles.radio_align}>
                  <RadioButton
                    value="Novo"
                    status={
                      conservation_edit === "Novo" ? "checked" : "unchecked"
                    }
                    onPress={() => setConservation_edit("Novo")}
                  />
                  <Text>Novo</Text>
                </View>

                <View style={styles.radio_align}>
                  <RadioButton
                    value="Usado"
                    status={
                      conservation_edit === "Usado" ? "checked" : "unchecked"
                    }
                    onPress={() => setConservation_edit("Usado")}
                  />
                  <Text>Usado</Text>
                </View>
              </View>
              <Card>
                <Card.Content>
                  <Paragraph>
                    A categoria "novo" se aplica ?? produtos que ainda estejam na
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
                value={brand_edit}
                placeholder={"Marca do modelo"}
                onChangeText={(text) => setBrand_edit(text)}
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
                    status={original_edit === "Sim" ? "checked" : "unchecked"}
                    onPress={() => setOriginal_edit("Sim")}
                  />
                  <Text>Sim</Text>
                </View>

                <View style={styles.radio_align}>
                  <RadioButton
                    value="N??o"
                    status={original_edit === "N??o" ? "checked" : "unchecked"}
                    onPress={() => setOriginal_edit("N??o")}
                  />
                  <Text>N??o</Text>
                </View>
              </View>
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Tamanho *</Text>
              <Input
                value={size_edit}
                placeholder={"Tamanho do modelo"}
                keyboardType={"numeric"}
                onChangeText={(text) => setSize_edit(text)}
              />
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Aceita trocas *</Text>
              <View style={styles.view_radioB}>
                <View style={styles.radio_align}>
                  <RadioButton
                    value="Sim"
                    status={
                      acceptChange_edit === "Sim" ? "checked" : "unchecked"
                    }
                    onPress={() => setAcceptChange_edit("Sim")}
                  />
                  <Text>Sim</Text>
                </View>

                <View style={styles.radio_align}>
                  <RadioButton
                    value="N??o"
                    status={
                      acceptChange_edit === "N??o" ? "checked" : "unchecked"
                    }
                    onPress={() => setAcceptChange_edit("N??o")}
                  />
                  <Text>N??o</Text>
                </View>
              </View>
            </View>

            <Divider />

            <View style={styles.content_views}>
              <Text style={styles.texts_views}>Pre??o *</Text>
              <MaskInput
                type={"money"}
                value={price_edit}
                placeholder={"0,00"}
                keyboardType={"numeric"}
                onChangeText={(text) => setPrice_edit(text)}
              />
            </View>

            <View>
              <Button mode="contained" onPress={handleUpdateAd}>
                Enviar Atualiza????es
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
