import * as React from 'react';
import { Platform, TextInput, TextInputProps } from 'react-native';
import { TextInput as WebTextInput } from 'react-native-web';

const AppTextInput: React.FC<TextInputProps> = (props) => {
  const { style, placeholderTextColor, ...otherProps } = props;
  return Platform.OS === 'web' ? (
    <WebTextInput
      {...otherProps}
      style={[{ outline: 'none' }, style]}
      placeholderTextColor={placeholderTextColor ?? '#78716C'}
    />
  ) : (
    <TextInput
      style={[style]}
      accessibilityLabel="Text input label"
      accessibilityHint="Text input hint"
      {...otherProps}
      placeholderTextColor={placeholderTextColor ?? '#78716C'}
    />
  );
};

export default AppTextInput;
