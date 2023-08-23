import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Header />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  content: {
    width: '60%',
  }
});
