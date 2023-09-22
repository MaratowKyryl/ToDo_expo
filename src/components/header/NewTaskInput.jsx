import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import AppTextInput from '../../common/components/AppTextInput';
import Colors from '../../common/utils/Colors';
import Strings from '../../common/utils/Strings';

export default function NewTaskInput() {
  const [search, setSearch] = useState('');

  const onSubmit = (event) => {};

  return (
    <View style={styles.container}>
      <Entypo style={styles.newTaskIcon} name="list" size={24} color={Colors.secondaryTextGray} />
      <AppTextInput
        style={styles.newTaskInput}
        value={search}
        onChangeText={(search) => setSearch(search)}
        placeholder={Strings.NEW_TASK_PLACEHOLDER}
        returnKeyType={'done'}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    height: 40,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.activeItem,
  },
  newTaskIcon: {
    marginRight: 10,
  },
  newTaskInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.secondaryTextGray,
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
