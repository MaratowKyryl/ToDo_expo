import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from "./TodoItem";
import { todos } from '../../dummy-data/index';


export default function TodoList() {

  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <FlatList data={todos} renderItem={({ item }) => <TodoItem todo={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'gray',
  }
});
