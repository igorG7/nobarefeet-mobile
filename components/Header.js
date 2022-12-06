import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";

export default function Header() {
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");
  return (
    <View>
      <Appbar.Header style={styles.header}>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title="NOBAREFEET" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        {/* <Appbar.Action icon="plus-box-outline" onPress={_handleSearch} /> */}
        <Appbar.Action icon="cart" onPress={_handleSearch} />
        <Appbar.Action icon="account" onPress={_handleSearch} />
        {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},

  title: {
    fontSize: 16,
  },
});
