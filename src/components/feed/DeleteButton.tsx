import React from 'react';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../common/utils/Colors';

export default function DeleteButton({ onDelete }: { onDelete: () => void }) {
  return (
    <Pressable onPress={onDelete}>
      <AntDesign name="delete" size={24} color={Colors.borderColor} />
    </Pressable>
  );
}
