import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Product_Component from "../components/Product_Component";
import Container from "../components/Container";
import Header from "../components/Header";

export default function Home() {
  return (
    <Container>
      <View>
        <View>
          <Header />
        </View>

        <View style={styles.main}>
          <View>
            <Text>Hello World</Text>
            <StatusBar style="auto" />
          </View>

          <View>
            <Product_Component />
            <Product_Component />
          </View>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 8,
    backgroundColor: "#878384",
  },

  header: {},
});
