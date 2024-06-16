import React from 'react';
import { View } from 'react-native';

const Spacer = ({w = 'auto', h = 'auto', f = 0}) => {
  return <View style={{width: w, height: h, flex: f}} />;
};

export default Spacer;
