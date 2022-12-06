import { useState } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Button } from "react-native-paper";
import Container from "../components/Container";
import Input from "../components/Input";

import { useUser } from "../context/UserProvider";
import { login } from "../services/auth_service";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("giovane67@gmail.com");
  const [password, setPassword] = useState("igor123");

  const { setSigned, setName, setId } = useUser();

  const handleLogin = () => {
    login({
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);

      if (res && res.user) {
        setSigned(true);
        setName(res.user.name);
        setId(res.user.id);
        navigation.navigate("Home");
      } else {
        Alert.alert("Atenção", "Email ou senha incorretos");
      }
    });
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
                value={email}
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
              <Button
                style={styles.buttons}
                mode="elevated"
                onPress={handleLogin}
              >
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
