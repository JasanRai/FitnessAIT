import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import MenuItem from "./ProgramItem";
import bulk from "../assets/bulk.jpg";
import cardios from "../assets/cardios.jpg";
import shreds from "../assets/shred.jpg";
import calis from "../assets/calis.jpg";

export default function ProgramScreen({ navigation }) {
  const navigateBulk = () => navigation.navigate("Bulk");
  const navigateCardio = () => navigation.navigate("Cardio");
  const navigateCalisthenics = () => navigation.navigate("Calisthenics");
  const navigateShred = () => navigation.navigate("Shred");

  return (
    <ImageBackground
      source={require("../assets/fitness.jpg")}
      style={styles.container}
    >
      <View style={styles.overlayContainer}>
        <View style={styles.top}>
          <Text style={styles.header}>P R O G R A M</Text>
        </View>
        <ScrollView>
          <View style={styles.menuContainer}>
            <MenuItem itemImage={bulk} navigate={navigateBulk} />
            <MenuItem itemImage={cardios} navigate={navigateCardio} />
            <MenuItem itemImage={calis} navigate={navigateCalisthenics} />
            <MenuItem itemImage={shreds} navigate={navigateShred} />
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
    height: 1200,
    flexDirection: "column",
    flexWrap: "wrap",
    opacity: 0.7,
    width: "100%",
  },
});
