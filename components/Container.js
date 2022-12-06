import { StyleSheet, Text, View } from "react-native";

export default function Container({ children }) {
  return <View style={styles.body}>{children}</View>;
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
