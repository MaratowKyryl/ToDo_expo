import React, { useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import Colors from './src/common/utils/Colors';
import TodoList from './src/components/feed/TodoList';
import Header from './src/components/header/Header';
import NewTaskInput from './src/components/header/NewTaskInput';
import * as AsyncStorage from "./src/common/utils/AsyncStorage";
import Constants from "./src/common/utils/Constants";
import {TodoState, useTodoItemStore} from "./src/components/feed/store";

export default function App() {

  const { setTodos } = useTodoItemStore((state) => state);

  useEffect( () => {
    async function init(){
      let todos = await AsyncStorage.getObjectValue(Constants.TODOS_STORAGE_KEY);

      if (!todos) {
        console.log('set dummy todos');
        await AsyncStorage.setObjectValue(Constants.TODOS_STORAGE_KEY, Constants.DUMMY_TODOS);
        todos = await AsyncStorage.getObjectValue(Constants.TODOS_STORAGE_KEY);
      }

      setTodos(todos);
    }

    init();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />
        <NewTaskInput />
        <TodoList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.appBackground,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: Platform.OS === 'web' ? '60%' : '90%',
  },
});
