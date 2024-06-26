import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Rating} from '@kolking/react-native-rating';
import {sizes} from '../utils/styles/sizes';
import {colors} from '../utils/styles';

const RatingBar = ({
  disable = false,
  size = sizes.xvi,
  rate = 0,
  spacing = 5,
  onChangeRate,
}) => {
  return (
    <Rating
      size={size}
      scale={1}
      spacing={spacing}
      disabled={disable}
      rating={rate}
      baseColor={colors.light}
      fillColor={colors.yellow}
      touchColor={colors.yellow}
      onChange={onChangeRate}
    />
  );
};

export default RatingBar;

const styles = StyleSheet.create({});
