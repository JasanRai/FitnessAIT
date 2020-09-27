import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Drawer from "./components/Drawer";
import Auth from "./components/Auth";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth}>
        <Auth />
      </Stack.Screen>
      <Stack.Screen name="Drawer" component={Drawer}>
        <Drawer />
      </Stack.Screen>
    </Stack.Navigator>
  );
}
2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
