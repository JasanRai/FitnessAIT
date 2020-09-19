import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'



export default function ProgramScreen({navigation}) { 

const pressHandler = () => {
    navigation.navigate('Program')
}

return (

    <View style = {styles.container}>
        <Text>Program Screen</Text>
        <Button title='Home' onPress={pressHandler} />
        
        
    </View>
)   
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})