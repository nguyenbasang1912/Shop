import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CText from './CText';
import {sizes} from '../utils/styles/sizes';
import {colors} from '../utils/styles';
import Spacer from './Spacer';

const CategoryItem = ({source, title, onClick, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onClick}
      style={styles.wrapper}
      {...props}>
      <View style={styles.circle}>
        <Image style={styles.img} source={source} />
      </View>
      <Spacer h={8} />
      <CText size={sizes.x} color={colors.grey}>
        {title}
      </CText>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.light,
  },
  img: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
