import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";

export default function CardioItem({ itemImage, navigate }) {
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
    width: "100%",
    height: 250,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
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
