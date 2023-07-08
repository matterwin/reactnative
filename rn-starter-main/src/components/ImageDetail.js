import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ test, imgPath }) => {
  return (
    <View>
        <Image source={imgPath}/>
        <Text>{test}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ImageDetail