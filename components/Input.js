import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function Input(props) {
  return <TextInput style={styles.inputs} {...props} />;
}

const styles = StyleSheet.create({
  inputs: {
    marginVertical: 8,
    backgroundColor: "#fff",
  },
});
