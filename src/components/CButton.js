import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../utils/styles';
import Spacer from './Spacer';

const CButton = ({
  children,
  onPress,
  wrapcontent = false,
  style,
  enable = true,
  isOutlineButton = false,
  borderColor,
  leftIcon,
  rightIcon,
}) => {
  const renderLeft = () => {
    return <View>{leftIcon}</View>;
  };

  const renderRight = () => {
    return <View>{rightIcon}</View>;
  };

  return (
    <TouchableOpacity
      disabled={!enable}
      onPress={onPress}
      style={[
        styles.main,
        wrapcontent ? styles.wrapper : styles.default,
        isOutlineButton && styles.outline && {borderColor: borderColor},
        style,
      ]}>
      {leftIcon ? renderLeft() : <Spacer w={0} />}
      {children}
      {rightIcon ? renderRight() : <Spacer w={0} />}
    </TouchableOpacity>
  );
};

export default CButton;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'auto',
    height: 'auto'
  },
  wrapper: {
    width: 'auto',
    height: 'auto',
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 5,
    alignSelf: 'baseline'
  },
  default: {
    width: '100%',
    height: 'auto',
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
