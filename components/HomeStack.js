import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './HomeScreen'
import Cardio from'./Cardio'

const screens = {
    Home: {
        screen : Home,
        navigationOptions: {
            title: 'Home'
            
        }
    },

    Cardio: {
        screen : Cardio,
        navigationOptions: {
            title: 'Cardio'
        }
    }

}


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle : { backgroundColor: '#45abf5', height: 80 }
    }
});

export default HomeStack;
