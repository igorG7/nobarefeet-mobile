import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default function ButtonImg(props) {
  return (
    <View>
      <Button mode="elevated" icon="image" style={styles.button_img} {...props}>
        +
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button_img: {
    width: 50,
  },
});
