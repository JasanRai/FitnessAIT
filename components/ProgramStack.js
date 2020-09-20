import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Program from './ProgramScreen'
import Header from '../shared/Header'
import React from 'react';


const screens = {
    Program: {
        screen : Program,
        navigationOptions:({ navigation }) => {
            return{
            headerTitle: () => <Header navigation={navigation} />,
            }
        }
    }


}


const ProgramStack = createStackNavigator(screens);

export default ProgramStack;
