import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "./Login";
import Home from "./HomeScreen";
import Cardio from "./Cardio";
import Header from "../shared/Header";

const screens = {
  Login: {
    screen: Login,
  },
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
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#45abf5", height: 80 },
  },
});

export default HomeStack;
