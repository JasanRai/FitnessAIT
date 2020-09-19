import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './HomeScreen'
import Programs from './Programs'


const screens = {
    Home: {
        screen : Home
    },
    Programs: {
        screen : Programs
    }


}


const HomeStack = createStackNavigator(screens);

export default HomeStack;
