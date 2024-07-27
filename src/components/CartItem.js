import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../utils/styles';
import {sizes} from '../utils/styles/sizes';
import CText from './CText';
import Row from './Row';
import Section from './Section';
import Spacer from './Spacer';

const CartItem = ({}) => {
  return (
    <Section style={styles.cartItem} p={sizes.xvi}>
      <Row>
        <Image
          style={styles.img}
          source={require('../assets/common/img-product.png')}
        />

        <Spacer w={sizes.xii} />

        <Section w="100%" background="pink">
          <Row justify={'space-between'} style={{}}>
            <CText numLine={2}>
              Nike Air Zoom Pegasus 36 Miami Pegasus 36 Miami Miami Pegasus
            </CText>
            <Row>
              <Icon name="hearto" color={colors.grey} size={sizes.xvi} />
              <Spacer w={sizes.viii} />
              <Icon name="delete" color={colors.grey} size={sizes.xvi} />
            </Row>
          </Row>

          <Row>
            <CText>$299</CText>
            {/**... */}
          </Row>
        </Section>
      </Row>
    </Section>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  cartItem: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.light,
  },
  img: {
    width: 72,
    height: 72,
    resizeMode: 'contain',
    borderRadius: 5,
  },
});
