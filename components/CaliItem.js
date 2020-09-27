import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default class CaliItem extends React.Component {
  render() {
    return (
      <View style={styles.menuItem}>
        <Image source={this.props.itemImage} style={styles.image} />
      </View>
    );
  }
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
    flex: 1,
    opacity: 1,
    borderColor: "#fff",
    resizeMode: "contain",
  },
});
