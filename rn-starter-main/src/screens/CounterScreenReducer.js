import React, { useReducer } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const reducer = (state, action) => {
    //state === { count: # }
    //action === { type: 'increment' || 'decrement', payload: 1 }

    switch (action.type){
        case 'increment':
            return { ...state, count: state.count + action.payload }
        case 'decrement':
            return { ...state, count: state.count - action.payload }
        default:
    }
}

const CounterScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <View>
        <Button 
            title='add button' 
            onPress={() => {
                dispatch({ type: 'increment', payload: 1 })
            }}
        />
        <Button 
            title='subtract button' 
            onPress={() => {
                dispatch({ type: 'decrement', payload: 1 })
            }}
        />
        <Text>Current count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreenReducer