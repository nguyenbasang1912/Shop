import React from 'react';
import {View} from 'react-native';
import {colors} from '../utils/styles';

const Section = ({
  w = 'auto',
  h = 'auto',
  f = 0,
  p = 0,
  ph,
  pv,
  m = 0,
  mh = 0,
  mv = 0,
  background = colors.transparent,
  style,
  children,
}) => {
  return (
    <View
      style={[
        {
          width: w,
          height: h,
          flex: f || 0,
          padding: p,
          paddingHorizontal: ph,
          paddingVertical: pv,
          margin: m,
          marginHorizontal: mh,
          marginVertical: mv,
          backgroundColor: background,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Section;
