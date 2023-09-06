import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function TodoItem({ todo }) {
  const [isFavorite, setIsFavorite] = useState(todo.isFavorite);

  return (
    <View style={styles.container}>
      <Text>{todo.title}</Text>
      <View>
        <Pressable onPress={() => setIsFavorite(!isFavorite)}>
          <Image source={require('../../assets/star.png')} style={getImageStyles(isFavorite)} />
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
