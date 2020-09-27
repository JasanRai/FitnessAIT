import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import ProgramStack from "./ProgramStack";
import HomeStack from "./HomeStack";
import Login from "./Login";

const RootDrawerNavigator = createDrawerNavigator({
  Login: {
    screen: Login,
  },

  Home: {
    screen: HomeStack,
  },

  Program: {
    screen: ProgramStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
