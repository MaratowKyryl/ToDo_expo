import React, { useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';

import Colors from '../../common/utils/Colors';
import { TodoState, useTodoItemStore } from './store';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos, pinnedTodos } = useTodoItemStore<TodoState>((state) => state);

  return (
    <View style={styles.container}>
      <ScrollView>
        {pinnedTodos?.map((todo) => <TodoItem todo={todo} />)}
        <View style={styles.separator} />
        {todos?.map((todo) => <TodoItem todo={todo} />)}
      </ScrollView>
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
    marginTop: 20,
    backgroundColor: Colors.borderColor,
  },
});
