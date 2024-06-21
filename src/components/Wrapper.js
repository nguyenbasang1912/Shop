import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, containerAttr} from '../utils/styles';

const Wrapper = ({
  children,
  statusbar = false,
  pv,
  ph,
  mv,
  mh,
  style,
  align,
  background = colors.white,
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={[
        containerAttr.container,
        statusbar && {paddingTop: top},
        {
          paddingVertical: pv || 0,
          paddingHorizontal: ph || 0,
          marginVertical: mv || 0,
          marginHorizontal: mh || 0,
          alignItems: align || 'stretch',
          backgroundColor: background,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Wrapper;
