import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { typography } from '../utils/styles';

const CText = ({children, type = 'common', onPress, color, style, size = 12}) => {
  const styles = useCallback(
    type => {
      switch (type) {
        case 'common': {
          return typography.commonText;
        }
        case 'button': {
          return typography.buttonText;
        }
        case 'input': {
          return typography.inputText;
        }
        case 'label': {
          return typography.label;
        }
        case 'pressable': {
          return typography.pressable;
        }
        default:
          return typography.commonText;
      }
    },
    [type],
  );

  return (
    <Text
      style={[
        {padding: 0, margin: 0},
        styles(type),
        color && {color: color},
        size && {fontSize: size},
        style,
      ]}
      onPress={onPress}>
      {children}
    </Text>
  );
};

export default CText;
