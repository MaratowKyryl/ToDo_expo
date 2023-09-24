import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../utils/Colors';

interface AppCheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export default function AppCheckbox({ checked, onChange }: AppCheckboxProps) {
  return (
    <Pressable style={[styles.checkboxBase]} onPress={() => onChange(!checked)}>
      {checked && <FontAwesome name="check" size={15} color="white" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.checkboxColor,
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
});
