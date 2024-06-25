import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {colors, containerAttr, typography} from '../utils/styles';
import Spacer from './Spacer';
import Row from './Row';
import CButton from './CButton';
import IconAnt from 'react-native-vector-icons/AntDesign';

const Input = ({
  placeholder = 'Input',
  leftIcon = 'email',
  leftNode,
  rightNode,
  showRightIcon = false,
  handleRightIcon,
  rightIcon = 'close',
  value,
  onChange,
  err = '',
  iconSize = 20,
  isPassword = false,
  type,
  style,
  onFocusInput,
  onBlurInput,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const renderLeft = useCallback(() => {
    return leftNode ? (
      leftNode
    ) : (
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
                : colors.grey
            }
          />
        </View>
        <Spacer w={10} />
      </>
    );
  }, [err, isFocused]);

  const renderRight = useCallback(() => {
    return rightNode ? (
      <CButton wrapcontent resetpm onPress={handleRightIcon}>
        {rightNode}
      </CButton>
    ) : (
      <CButton wrapcontent resetpm onPress={handleRightIcon}>
        <IconAnt
          name={rightIcon}
          size={iconSize}
          color={
            (!!err && colors.red) || isFocused
              ? !!err
                ? colors.red
                : colors.primary
              : colors.grey
          }
        />
      </CButton>
    );
  }, [isFocused, err]);
  return (
    <>
      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.focus,
          err && styles.err,
          style,
        ]}>
        <Row>
          {leftIcon && renderLeft()}
          <TextInput
            keyboardType={type}
            secureTextEntry={isPassword}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={colors.grey}
            style={[value && typography.inputText, styles.input]}
            onFocus={() => {
              setIsFocused(true);
              onFocusInput?.();
            }}
            onBlur={() => {
              setIsFocused(false);
              onBlurInput?.();
            }}
            {...props}
          />
          {showRightIcon && renderRight()}
        </Row>
      </View>
      {err && (
        <View style={[containerAttr.w100, styles.fs]}>
          <Spacer h={8} />
          <Text style={styles.textErr}>{err}</Text>
        </View>
      )}
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  fs: {
    alignItems: 'flex-start',
  },
  textErr: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.red,
    lineHeight: 18,
  },
  inputWrapper: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    ...containerAttr.borderColor,
  },
  input: {
    flex: 1,
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
