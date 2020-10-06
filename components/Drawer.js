import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import ProgramStack from "./ProgramStack";
import HomeStack from "./HomeStack";
import Auth from "./Auth";
import Gallery from "./Gallery";

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
  Gallery: {
    screen: Gallery,
  },
});

export default createAppContainer(RootDrawerNavigator);
