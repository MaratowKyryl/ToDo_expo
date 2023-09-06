import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { ITodoItem } from '$components/feed/models';

export default function TodoItem({ todo }: { todo: ITodoItem }) {
  const [isFavorite, setIsFavorite] = useState(todo.isPinned);

  return (
    <View style={styles.container}>
      <Text>{todo.title}</Text>
      <View>
        <Pressable onPress={() => setIsFavorite(!isFavorite)}>
          <Image source={require('../../../assets/star.png')} style={getImageStyles(isFavorite)} />
        </Pressable>
      </View>
    </View>
  );
}

const getImageStyles = (isFavorite) => {
  if (isFavorite) {
    return {
      width: 20,
      height: 20,
      tintColor: 'yellow',
    };
  }
  return {
    width: 20,
    height: 20,
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    marginTop: 20,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
