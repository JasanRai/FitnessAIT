import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import MenuItem from "./CardioItem";
import Csupreme from "../assets/cardioSupreme.jpg";
import AnywhereCardio from "../assets/anywhereCardio.png";

export default function Cardio({ navigation }) {
  const navigateCSupreme = () => navigation.navigate("CSupreme");
  const navigateAnywhere = () => navigation.navigate("Anywhere");

  return (
    <ImageBackground
      source={require("../assets/fitness.jpg")}
      style={styles.container}
    >
      <View style={styles.overlayContainer}>
        <View style={styles.top}>
          <Text style={styles.header}>C A R D I O</Text>
        </View>
        <ScrollView>
          <View style={styles.menuContainer}>
            <MenuItem itemImage={Csupreme} navigate={navigateCSupreme} />
            <MenuItem itemImage={AnywhereCardio} navigate={navigateAnywhere} />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overLayContainer: {
    flex: 1,
    backgroundColor: "rgba(47,163,218, .4)",
  },
  top: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    fontSize: 28,
    borderColor: "#fff",
    borderWidth: 3,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "rgba(255,255,255, .1)",
  },
  menuContainer: {
    height: 800,
    flexDirection: "column",
    flexWrap: "wrap",
    opacity: 0.9,
    width: "100%",
  },
});
