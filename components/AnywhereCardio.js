import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
} from "react-native";

import ac from "../assets/anywhereCardio.png";
import fitness from "../assets/fitness.jpg";

export default function AnywhereCardio({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("");
  };

  return (
    <ImageBackground source={fitness} style={styles.container}>
      <Image
        source={ac}
        style={{ width: "100%", height: "100%" }}
        // alignItems="center"
        // justifyContent="center"
        resizeMode="contain"
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
