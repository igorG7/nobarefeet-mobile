import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";

export default function Input(props) {
  return <TextInput style={styles.inputs} {...props} />;
}

export function MaskInput(props) {
  return <TextInputMask {...props} style={styles.inputMask} />;
}

const styles = StyleSheet.create({
  inputs: {
    marginVertical: 8,
    backgroundColor: "#fff",
  },
  inputMask: {
    backgroundColor: "white",
    width: 296,
    height: 55,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    marginVertical: 8,
    padding: 16,
    fontSize: 16,
  },
});
