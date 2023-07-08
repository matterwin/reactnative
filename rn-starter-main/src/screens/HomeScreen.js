import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  const test = () => {
    console.log("pressed");
  }

  return( 
    <View>
      <Text style={styles.text}>Hello world!</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={test}
      />
      <TouchableOpacity>
        <Text 
          onPress={test}
        >
          Go to List Demo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;




