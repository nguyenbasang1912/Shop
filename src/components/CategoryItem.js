import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {sizes} from '../utils/styles/sizes';
import {colors} from '../utils/styles';
import {Spacer, CText} from '.';

const CategoryItem = ({source, title, onClick, size, ...props}) => {
  const circleStyle = useCallback(() => {
    return {
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.light,
    };
  }, [size]);

  const width = useCallback(() => {
    return {
      width: size
    }
  }, [size])

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onClick}
      style={[styles.wrapper, width()]}
      {...props}>
      <View style={size ? circleStyle() : styles.circle}>
        <Image style={styles.img} source={source} />
      </View>
      <Spacer h={8} />
      <CText size={sizes.x} color={colors.grey} numLine={1}>
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
