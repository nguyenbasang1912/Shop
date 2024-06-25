import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Section from './Section';
import {sizes} from '../utils/styles/sizes';
import {colors} from '../utils/styles';
import CText from './CText';
import Spacer from './Spacer';
import Row from './Row';
import RatingBar from './RatingBar';
import Icon from 'react-native-vector-icons/AntDesign';
import CButton from './CButton';

const ProductItem = ({
  title = 'Nike Air Max 270 React ENG',
  rate,
  price,
  saleoff,
  cost,
  flex = 0,
  source,
  width,
  isFavorite = true,
  onPressDelete,
  style,
}) => {
  return (
    <Section
      pv={sizes.xvi}
      ph={sizes.xvi}
      f={flex}
      w={width}
      style={[styles.box, style]}>
      <Image style={styles.image} source={source} />
      <Spacer h={8} />
      <CText type="button" size={sizes.xii} color={colors.dark} numLine={2}>
        {title.toUpperCase()}
      </CText>
      <Spacer h={8} />
      {rate && (
        <>
          <RatingBar disable rate={rate} />
          <Spacer h={8} />
        </>
      )}
      <CText type="button" color={colors.primary}>
        {price}
      </CText>
      <Spacer h={8} />
      <Row>
        <CText color={colors.grey} size={sizes.x} style={styles.cost}>
          {cost}
        </CText>
        <Spacer w={8} />
        <CText color={colors.red} size={sizes.x} type="button">
          {saleoff}
        </CText>
        {isFavorite && (
          <Row justify={'flex-end'} f={1}>
            <CButton onPress={onPressDelete} wrapcontent resetpm>
              <Icon name="delete" size={sizes.xviii} color={colors.grey} />
            </CButton>
          </Row>
        )}
      </Row>
    </Section>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 5,
  },
  cost: {
    textDecorationLine: 'line-through',
  },
  image: {
    resizeMode: 'cover',
    backgroundColor: colors.light,
    borderRadius: 5,
    width: '100%',
    height: 'auto',
    aspectRatio: 1
  },
});
