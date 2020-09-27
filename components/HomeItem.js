import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { Image } from "react-native-elements";

export default function HomeItem({ itemImage, navigate }) {
  return (
    <View style={styles.menuItem}>
      <Image
        source={itemImage}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
        onPress={() => navigate()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    width: "50%",
    height: "50%",
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "#000",
  },
  image: {
    width: 200,
    height: 200,
    opacity: 1,
    borderColor: "#fff",
    resizeMode: "contain",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
