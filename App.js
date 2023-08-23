import { StyleSheet, View } from 'react-native';
import Header from './src/components/header/Header';
import TodoList from "./src/feed/TodoList";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />
        <TodoList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  content: {
    width: '60%',
  }
});
