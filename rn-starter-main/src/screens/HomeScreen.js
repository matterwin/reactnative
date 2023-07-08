import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  const test = () => {
    console.log("button pressed");
  }

  return( 
    <View>
      <Text style={styles.text}>Hello world!</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={test}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;




