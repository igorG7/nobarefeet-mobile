import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { Button } from "react-native-paper";
import Container from "../components/Container";
import Input from "../components/Input";
import { MaskInput } from "../components/Input";
import { register } from "../services/auth_service";

export default function Login({ navigation }) {
  const [name, setName] = useState("Giovane da Costa");
  const [email, setEmail] = useState("giovane67@gmail.com");
  const [cpf, setCpf] = useState("019.921.194-45");
  const [password, setPassword] = useState("igor123");
  const [confirmPassword, setConfirmPassword] = useState("igor123");
  const [cell, setCell] = useState("(31) 98687-4522");
  const [cep, setCEP] = useState("33943-670");
  const [nasc, setNasc] = useState("01/06/1999");

  const handleRegister = () => {
    register({
      nome: name,
      email: email,
      cpf_cnpj: cpf,
      senha: password,
      telefone: cell,
      cep: cep,
      data_nascimento: nasc,
    }).then((res) => {
      console.log(res);

      if (res) {
        Alert.alert("Tudo certo!", "O registro foi feito com sucesso.", [
          {
            text: "Ok",
            onPress: () => navigation.goBack(),
          },
        ]);
      } else {
        Alert.alert("Atenção usuário já existente.");
      }
    });
  };

  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.body}>
            <View>
              <Text style={styles.title}>NOBAREFEET</Text>
            </View>

            <View style={styles.main}>
              <View style={styles.registerContainer}>
                <View>
                  <Text style={styles.textRegisCont}>Preencha os campos!</Text>
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

                  <Input
                    label="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                  />

                  <Input
                    label="Repetir Senha"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                  />

                  <MaskInput
                    type={"cpf"}
                    value={cpf}
                    onChangeText={(text) => setCpf(text)}
                    placeholder="CPF"
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
                    onPress={handleRegister}
                  >
                    Registrar
                  </Button>

                  <Button
                    style={styles.buttons}
                    mode="elevated"
                    onPress={() => navigation.goBack()}
                  >
                    Voltar
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
  body: {
    marginBottom: 16,
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
