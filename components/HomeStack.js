import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Auth from "./Auth";
import Home from "./HomeScreen";
import Cardio from "./Cardio";
import Bulk from "./Bulk";
import Header from "../shared/Header";

const screens = {
  // Auth: {
  //   screen: Auth,

  //   navigationOptions: ({ navigation }) => {
  //     return {
  //       headerTitle: () => null,
  //     };
  //   },
  // },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },

  Cardio: {
    screen: Cardio,
    navigationOptions: {
      title: "Cardio",
    },
  },

  Bulk: {
    screen: Bulk,
    navigationOptions: {
      title: "Bulk",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#45abf5", height: 80 },
  },
});

export default HomeStack;
