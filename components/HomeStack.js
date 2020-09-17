import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './HomeScreen'
import Program from './Programs'


const screens = {
    Home: {
        screen : Home
    },
    Program: {
        screen : Program
    }


}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
