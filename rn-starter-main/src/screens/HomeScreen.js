import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return( 
    <View>
      <Text style={styles.text}>Hello world!ll</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title="Go to Image Demo" 
        onPress={() => navigation.navigate('Image')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>
          Go to List Demo
        </Text>
      </TouchableOpacity>
      <Button 
        title="Go to Counter Demo" 
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title="Go to Color Demo" 
        onPress={() => navigation.navigate('Color')}
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




