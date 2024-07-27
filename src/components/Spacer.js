import React from 'react';
import { View } from 'react-native';

const Spacer = ({w = 'auto', h = 'auto', f = 0, color, style}) => {
  return <View style={[{width: w, height: h, flex: f}, color && {borderTopWidth: 1, borderColor: color}, style]} />;
};

export default Spacer;
