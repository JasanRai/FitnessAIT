import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'



export default function ProgramScreen({navigation}) { 

return (

    <View style = {styles.container}>
        <Text>Program Screen</Text>
    </View>
)   
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})