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
import MenuItem from "./BulkItem";
import fitness from "../assets/fitness.jpg";
import bulk from "../assets/bulk.jpg";

export default function Bulk({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground source={fitness} style={styles.container}>
      <View style={styles.overlayContainer}>
        <View style={styles.top}>
          <Text style={styles.header}>B U L K</Text>
        </View>
        <ScrollView>
          <View style={styles.menuContainer}>
            <MenuItem itemImage={bulk} />
            <MenuItem itemImage={bulk} />
            <MenuItem itemImage={bulk} />
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
