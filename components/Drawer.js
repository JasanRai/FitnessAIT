import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import ProgramStack from "./ProgramStack";
import HomeStack from "./HomeStack";
import Auth from "./Auth";

const RootDrawerNavigator = createDrawerNavigator({
  Auth: {
    screen: Auth,
  },

  Home: {
    screen: HomeStack,
  },

  Program: {
    screen: ProgramStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
