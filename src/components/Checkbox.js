import React, {memo, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/styles';
import {sizes} from '../utils/styles/sizes';
import CButton from './CButton';

const Checkbox = ({callback, color, size, initState}) => {
  const [checked, setChecked] = useState(initState || false);

  useEffect(() => {
    callback(checked);
  }, [checked]);

  return (
    <CButton wrapcontent resetpm onPress={() => setChecked(prev => !prev)}>
      <Icon
        name={checked ? 'check-box' : 'check-box-outline-blank'}
        color={color || colors.primary}
        size={size || sizes.xviii}
      />
    </CButton>
  );
};

export default memo(Checkbox);

const styles = StyleSheet.create({});
