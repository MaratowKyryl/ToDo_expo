import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';

import AppCheckbox from '../../common/components/AppCheckbox';
import Colors from '../../common/utils/Colors';
import { ITodoItem } from './models';

export default function TodoItem({ todo }: { todo: ITodoItem }) {
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  return (
    <View style={styles.container}>
      <AppCheckbox
        onChange={() => setIsCompleted(!isCompleted)}
        checked={isCompleted}
        inactiveButtonStyle={styles.checkbox}
        activeButtonStyle={styles.checkbox}
      />
      <View>
        <Text style={styles.todoTitle}>{todo.title}</Text>
        {todo.memo ? <Text style={styles.todoMemo}>{todo.memo}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 10,
    color: Colors.appBackground,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  todoTitle: {
    color: Colors.textWhite,
  },
  todoMemo: {
    color: Colors.secondaryTextGray,
  },
});
