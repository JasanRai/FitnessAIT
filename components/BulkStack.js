import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Bulk from "./Bulk";


const screens = {
  Bulk: {
    screen: Bulk,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },

  DB: {
      screen: DB,
      title: "DumbBell Bulking",
  },

  Chest: {
      screen: Chest,
      title: "Chest Bulking",

  }

},



const BulkStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#45abf5", height: 80 },
  },
});

export default BulkStack;
