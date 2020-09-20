import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'



export default function Cardio({navigation}) { 

const pressHandler = () => {
    navigation.navigate('Home')
}

return (

    <View style = {styles.container}>
        <Text>Cardio</Text>
        <Button title='Home' onPress={pressHandler} />
        
        
    </View>
)   
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})