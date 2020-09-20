import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'



export default function HomeScreen({navigation}) { 

const pressHandler = () => {
    navigation.navigate('Cardio')
}

return (

    <View style = {styles.container}>
        <Text>Home Screen</Text>
        <Button title='Cardio' onPress={pressHandler} />
        
        
    </View>
)   
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})

