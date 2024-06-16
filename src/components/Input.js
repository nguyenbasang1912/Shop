import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { colors, containerAttr, typography } from '../utils/styles';
import Spacer from './Spacer';

const Input = ({
  placeholder = 'Input',
  leftIcon = 'email',
  value,
  onChange,
  err = '',
  iconSize = 20
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const renderLeft = useCallback(() => {

    return (
      <>
        <View>
          <Icon
            name={leftIcon}
            size={iconSize}
            color={
              (!!err && colors.red) || isFocused
                ? !!err
                  ? colors.red
                  : colors.primary
                : colors.primary || colors.grey
            }
          />
        </View>
        <Spacer w={10} />
      </>
    );
  }, [leftIcon, isFocused, err]);

  return (
    <>
      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.focus,
          err && styles.err,
        ]}>
        {leftIcon && renderLeft()}
        <TextInput
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
          style={[typography.inputText, styles.input]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      {err && (
        <>
          <Spacer h={8} />
          <Text style={styles.textErr}>{err}</Text>
        </>
      )}
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  textErr: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.red,
    lineHeight: 18,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    ...containerAttr.borderColor,
  },
  input: {
    width: '100%',
    height: 'auto',
    padding: 0,
    margin: 0,
  },
  err: {
    borderColor: colors.red,
  },
  focus: {
    borderColor: colors.primary,
  },
});
