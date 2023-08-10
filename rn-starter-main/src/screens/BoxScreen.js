import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle1}>Child 1</Text>
        <Text style={styles.textStyle2}>Child 2</Text>
        <Text style={styles.textStyle3}>Child 3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-end', //default alignItems is 'stretch' meaning it fits the width of its parent,
        flexDirection: 'row', //default is 'column'
        justifyContent: 'space-between', //default is 'flex-start'
        height: 200
    },
        // marginVertical: 20,
    // marginHorizontal: 20,
    // margin: 20 //same as above
    textStyle1: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    },
    textStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        top: 10, //acts like marginTop
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...StyleSheet.absoluteFillObject //or from pos to left is the same thing as this line
    },
    textStyle3: {
        borderWidth: 3,
        borderColor: 'red',
        alignItems: 'flex-start' //overrides alignItems of parent and applies only to this child component
    },
});

export default BoxScreen;