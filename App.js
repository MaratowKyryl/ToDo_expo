import { Platform, StyleSheet, View } from 'react-native';

import Colors from '$colors';
import TodoList from '$components/feed/TodoList';
import Header from '$components/header/Header';
import NewTaskInput from '$components/header/NewTaskInput';

export default function App() {
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
