import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Colors from '../../common/utils/Colors';

export default function NewTaskInput() {
  const [search, setSearch] = useState('');

  const onSubmit = (event) => {};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={(search) => setSearch(search)}
        returnKeyType={'done'}
        onSubmitEditing={onSubmit}
      />
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
    backgroundColor: Colors.activeItem,
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
  },
});
