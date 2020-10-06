import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";

import MenuItem from "./BulkItem";
import fitness from "../assets/fitness.jpg";
import dbBulk from "../assets/db.jpg";
import chest from "../assets/chest.jpg";

export default function Bulk({ navigation }) {
  const navigateChest = () => navigation.navigate("Chest");
  const navigateDB = () => navigation.navigate("DB");

  const pressHandler = () => {
    navigation.navigate("");
  };

  return (
    <ImageBackground source={fitness} style={styles.container}>
      <View style={styles.overlayContainer}>
        <View style={styles.top}>
          <Text style={styles.header}>B U L K</Text>
        </View>
        <ScrollView>
          <View style={styles.menuContainer}>
            <MenuItem itemImage={dbBulk} navigate={navigateDB} />
            <MenuItem itemImage={chest} navigate={navigateChest} />
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
    height: 700,
    flexDirection: "column",
    flexWrap: "wrap",
    opacity: 0.9,
    width: "100%",
  },
});
