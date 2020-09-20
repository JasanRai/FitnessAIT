import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import ProgramStack from './ProgramStack'
import HomeStack from './HomeStack'

const RootDrawerNavigator = createDrawerNavigator({

    Home : {
        screen: HomeStack,
    },

    Program : {
        screen: ProgramStack,
    }

})

export default createAppContainer(RootDrawerNavigator);