import { StyleSheet, View, Platform } from 'react-native';
import Header from './src/components/header/Header';
import TodoList from "./src/feed/TodoList";
import Colors from './src/common/utils/Colors';
import NewTaskInput from "./src/components/header/NewTaskInput";

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
  }
});
