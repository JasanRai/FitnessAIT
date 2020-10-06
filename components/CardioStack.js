import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Cardio from "./Cardio";


const screens = {
  Cardio: {
    screen: Cardio,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },

  CSupreme: {
    screen: CSupreme,
    title: "Cardio Supreme",
  },

  Anywhere: {
    screen: Anywhere,
    title: "Anywhere Cardio"
  }



},



const CardioStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#45abf5", height: 80 },
  },
});

export default CardioStack;
