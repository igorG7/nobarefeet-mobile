import { useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Button } from "react-native-paper";
import Container from "../components/Container";
import Input from "../components/Input";

import { useUser } from "../context/UserProvider";
import { login } from "../services/auth_service";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("giovane67@gmail.com");
  const name = "teste";
  const [password, setPassword] = useState("teste");
  const [statusRequest, setStatusRequest] = useState();
  const { setSigned, setName, setId } = useUser();

  const login = async () => {
    try {
      return await axios
        .post(
          `https://no-bare-feet-api-1670964769587.azurewebsites.net/login`,
          { nome: name, senha: password }
        )
        .then(
          (response) => {
            console.log(response.data);
            console.log(response.status);
            setStatusRequest(response.data.status);
            console.log(statusRequest);
            setId(response.data.id);
            setName(response.data.nomeUsuario);
            setSigned(true);

            if (statusRequest === "OK") {
              navigation.navigate("Home");
            } else {
              Alert.alert("Atenção", "Email ou senha incorretos");
            }
          },
          (error) => {
            console.log(error);
            return null;
          }
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <View>
        <View>
          <Text style={styles.title}>NOBAREFEET</Text>
        </View>

        <View style={styles.main}>
          <View style={styles.userRadius}>
            <Image source={require("../assets/user.png")} />
          </View>

          <View style={styles.loginContainer}>
            <View>
              <Text style={styles.textLoginCont}>Entre com sua conta!</Text>
            </View>
            <View style={styles.viewInput}>
              <Input
                label="Email"
                keyboardType="email-address"
                value={name}
                onChangeText={(text) => setEmail(text)}
              />

              <Input
                label="Senha"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <View style={styles.viewButtons}>
              <Button style={styles.buttons} mode="elevated" onPress={login}>
                Entrar
              </Button>

              <View style={styles.viewDecorate}>
                <View style={styles.viewRow}></View>
                <Text>Ou</Text>
                <View style={styles.viewRow}></View>
              </View>

              <Button
                style={styles.buttons}
                mode="elevated"
                onPress={() => navigation.navigate("Registro")}
              >
                Registrar
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 64,
  },

  main: {
    marginTop: 50,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#EDE8E8",
    position: "relative",
    borderRadius: 16,
  },

  userRadius: {
    width: 70,
    height: 70,
    backgroundColor: "#EDE8E8",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 127,
    top: -35,
  },

  loginContainer: {
    marginTop: 32,
  },

  textLoginCont: {
    fontSize: 22,
    textAlign: "center",
  },

  buttons: {
    marginVertical: 6,
  },

  viewButtons: {
    marginTop: 64,
  },

  viewInput: {
    marginTop: 16,
  },

  viewRow: {
    width: 100,
    height: 1,
    backgroundColor: "#000000",
    marginHorizontal: 8,
  },

  viewDecorate: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
