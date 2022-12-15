import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import { Button } from "react-native-paper";
import Container from "../components/Container";
import Input from "../components/Input";
import { MaskInput } from "../components/Input";
import { updateInfoUser, getInfosUser } from "../services/auth_service";
import { useUser } from "../context/UserProvider";

export default function Login({ navigation, route }) {
  const nameDataUser = route.params;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [cell, setCell] = useState();
  const [cep, setCEP] = useState();
  const [nasc, setNasc] = useState();
  const { id } = useUser();

  useEffect(() => {
    getInfosUser(id).then((res) => {
      console.log(res);
      setName(res.name);
      setEmail(res.email);
      setCEP(res.cep);
      setCell(res.cell);
      setCpf(res.cpf);
      setNasc(res.dataNascimento);
    });
  }, []);

  const handleUpdateUser = () => {
    updateInfoUser(id, {
      name: name,
      email: email,
      cpf: cpf,
      cell: cell,
      cep: cep,
      dataNascimento: nasc,
    }).then((res) => {
      console.log(res);

      if (res) {
        Alert.alert(
          "Tudo certo!",
          "Suas informações pessoais foram atualizadas. Sugerimos que saia da sua conta e faça login novamente para que as alterações sejam aplicadas corretamente.",
          [
            {
              text: "Ok",
              onPress: () => navigation.goBack(),
            },
          ]
        );
      } else {
        Alert.alert("Não foi possível atualizar seus dados.");
      }
    });

    console.log(name, email, cpf);
  };

  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.registerContainer}>
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

                <Text style={styles.text_name}>{nameDataUser.nameUser}</Text>
                <Text style={{ fontSize: 16 }}>
                  Esses são seus dados pessoais
                </Text>
              </View>
              <View style={styles.main}>
                <View>
                  <Text style={styles.textRegisCont}>Atualize seus dados</Text>
                </View>
                <View style={styles.viewInput}>
                  <Input
                    label="Nome Completo"
                    value={name}
                    onChangeText={(text) => setName(text)}
                  />

                  <Input
                    label="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />

                  <MaskInput
                    type={"cel-phone"}
                    options={{
                      maskType: "BRL",
                      withDDD: true,
                      dddMask: "(99) ",
                    }}
                    value={cell}
                    onChangeText={(text) => setCell(text)}
                    placeholder="Celular"
                  />

                  <MaskInput
                    type={"zip-code"}
                    value={cep}
                    onChangeText={(text) => setCEP(text)}
                    placeholder="CEP"
                  />

                  <MaskInput
                    type={"datetime"}
                    options={{
                      format: "DD/MM/YYYY",
                    }}
                    value={nasc}
                    onChangeText={(text) => setNasc(text)}
                    placeholder="Data de nascimento"
                  />
                </View>

                <View style={styles.viewButtons}>
                  <Button
                    style={styles.buttons}
                    mode="elevated"
                    onPress={handleUpdateUser}
                  >
                    Enviar atualizações
                  </Button>
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
  body: { marginBottom: 16 },

  view_back: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
  },

  arrow_left: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },

  profile_view: {
    margin: 8,
    alignItems: "center",
    flexDirection: "column",
  },

  text_name: {
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 4,
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

  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 32,
  },

  main: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#EDE8E8",
    position: "relative",
    borderRadius: 16,
  },

  registerContainer: {
    marginTop: 4,
  },

  textRegisCont: {
    fontSize: 20,
    textAlign: "center",
  },

  buttons: {
    marginVertical: 6,
  },

  viewButtons: {
    marginTop: 8,
  },

  viewInput: {
    marginTop: 16,
  },
});
