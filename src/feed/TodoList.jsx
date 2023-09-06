import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { useTodoItemStore } from './store';

export default function TodoList() {
  const { todos, fetchTodos } = useTodoItemStore();

  useEffect(async () => {
    if (!todos) {
      await fetchTodos();
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <FlatList data={todos} renderItem={({ item }) => <TodoItem todo={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'gray',
  },
});
