import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.headerTitleText}>Illia Kyryliv</Text>
        <SearchInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
