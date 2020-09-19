import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Program from './ProgramScreen'


const screens = {
    Program: {
        screen : Program
    }


}


const ProgramStack = createStackNavigator(screens);

export default ProgramStack;
