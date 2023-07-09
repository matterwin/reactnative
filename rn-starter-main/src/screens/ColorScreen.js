import React, {useState, useEffect} from 'react'
import {View, Text, Button, StyleSheet, FlatList}from 'react-native'

const ColorScreen = () => {
    const [color, setColor] = useState([]);

    const genColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        setColor(`rgb(${red},${green},${blue})`)
    }

    const genColorInternal = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red},${green},${blue})`
    }

    useEffect(() => {
        genColor()
    },[])

  return (
    <View>
        <Button 
            title="Change color via useEffect" 
            onPress={genColor}
        />
        <Button 
            title="Change color via prev" 
            onPress={() => {
                    setColor([...color, genColorInternal()])
            }}
        />
        <View style={{ height: 100, width: 100, backgroundColor:color }}/>
        <FlatList 
            keyExtractor={item => item}
            data={color}
            renderItem={({ item }) => {
                return (<View style={{ height: 100, width: 100, backgroundColor:item }}/>);
            }}
        />
    </View>
  )
}

export default ColorScreen