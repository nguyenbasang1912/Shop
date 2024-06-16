import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {containerAttr} from '../utils/styles';

const Input = ({
  placeholder = 'Input',
  leftIcon,
  rightIcon,
  onPressLeft,
  onPressRight,
}) => {
  const renderLeft = () => {
    return (
      <TouchableOpacity onPress={onPressLeft}>{leftIcon}</TouchableOpacity>
    );
  };

  const renderRight = () => {
    return (
      <TouchableOpacity onPress={onPressRight}>{rightIcon}</TouchableOpacity>
    );
  };

  return (
    <View style={styles.inputWrapper}>
      {leftIcon && renderLeft()}
      <TextInput placeholder={placeholder} />
      {rightIcon && renderRight()}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    height: 'auto',
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    ...containerAttr.borderColor,
  },
  input: {
    width: '100%',
    height: 'auto',
  },
});
