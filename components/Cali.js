import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";

// import MenuItem from "./HomeItem";
import MenuItem from "./CaliItem";
import fitness from "../assets/fitness.jpg";
import bulk from "../assets/bulk.jpg";
import cardios from "../assets/cardios.jpg";

export default function Cali({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Program");
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
            <MenuItem itemImage={cardios} />
            <MenuItem itemImage={fitness} />
            <MenuItem itemImage={cardios} />
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
    height: 1500,
    flexDirection: "column",
    flexWrap: "wrap",
    opacity: 0.7,
    width: "100%",
  },
});
