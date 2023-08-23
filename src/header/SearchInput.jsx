import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native';

export default function SearchInput() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} value={search} onChangeText={(search) => setSearch(search)} />
      <Pressable onPress={() => alert(search)} style={styles.searchButton}>
        <Text>Search</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchInput: {
    padding: 10,
    height: 30,
    width: '90%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  searchButton: {
    height: 30,
    width: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'lightblue',
    borderWidth: '1px',
    borderColor: 'gray',
  }
});
