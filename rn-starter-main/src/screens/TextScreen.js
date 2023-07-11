import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {
    const [password, setPassword] = useState('');

  return (
    <View>
        <Text>Enter Password:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false} // good for password or usernames to be set to false and none
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
        />
        <Text>My name is {password}</Text>
        {password.length < 4 ? <Text>Password is too short</Text> : null}
    </View>
  )
}

//TextInput by default comes with absolute zero styling
const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen