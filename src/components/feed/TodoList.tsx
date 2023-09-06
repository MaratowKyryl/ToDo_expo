import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { TodoState, useTodoItemStore } from './store';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos, fetchTodos } = useTodoItemStore<TodoState>((state) => state);

  useEffect(() => {
    if (!todos) {
      fetchTodos('https://jsonplaceholder.typicode.com/todos');
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
