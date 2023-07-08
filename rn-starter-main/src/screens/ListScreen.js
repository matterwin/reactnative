import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Friend #1', age: '12' },
        { name: 'Friend #2', age: '11' },
        { name: 'Friend #3', age: '13' },
        { name: 'Friend #4', age: '1' },
        { name: 'Friend #5', age: '123' },
        { name: 'Friend #6', age: '2' },
        { name: 'Friend #7', age: '412' },
        { name: 'Friend #8', age: '125' },
        { name: 'Friend #900', age: '612' },
    ];

  return (
    <FlatList 
        // horizontal={true}
        showsHorizontalScrollIndicator={false} 
        keyExtractor={friend => friend.name}
        data={friends} 
        renderItem={({ item }) => {
            // elem === { item: { name: 'Friend #1' }, index: 0}
            return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
        }} 
    />
  )
}

const styles=StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen