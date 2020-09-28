import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";

import fitness from "../assets/fitness.jpg";
import bulk from "../assets/bulk.jpg";
import MenuItem from "./CaliItem";

export default function Calisthenics({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("");
  };

  return (
    <ImageBackground source={fitness} style={styles.container}>
      <View style={styles.overlayContainer}>
        <View style={styles.top}>
          <Text style={styles.header}>C A L I S T H E N I C</Text>
        </View>
        <ScrollView>
          <View style={styles.menuContainer}>
            <MenuItem itemImage={bulk} />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
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
    fontSize: 25,
    borderColor: "#fff",
    borderWidth: 3,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "rgba(255,255,255, .1)",
  },
  menuContainer: {
    height: 1200,
    flexDirection: "column",
    flexWrap: "wrap",

    width: "100%",
  },
});
