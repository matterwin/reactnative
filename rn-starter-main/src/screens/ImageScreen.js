import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'


const ImageScreen = () => {
  return (
    <View>
        <ImageDetail test={"Forest"} imgPath={require("../../assets/apple.jpg")}/>
        <ImageDetail test={"Beach"} imgPath={require("../../assets/apple.jpg")}/>
        <ImageDetail test={"Mountain"} imgPath={require("../../assets/apple.jpg")}/>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ImageScreen