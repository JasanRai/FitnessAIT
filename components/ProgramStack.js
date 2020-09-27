import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Program from "./ProgramScreen";
import Header from "../shared/Header";
import Cardio from "./Cardio";
import Bulk from "./Bulk";
import Shred from "./Shred";
import Cali from "./Cali";
import React from "react";

const screens = {
  Program: {
    screen: Program,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
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

    Shred: {
      screen: Shred,
      navigationOptions: {
        title: "Shred",
      },
    },

    Cali: {
      screen: Cali,
      navigationOptions: {
        title: "Calisthenic",
      },
    },
  },
};

const ProgramStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#45abf5", height: 80 },
  },
});

export default ProgramStack;
