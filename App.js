import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Header } from "react-native";
import Navigator from "./components/Drawer";

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
