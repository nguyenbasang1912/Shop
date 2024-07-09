import React, {useCallback} from 'react';
import {FlatList, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CButton,
  CText,
  Input,
  Row,
  Section,
  Spacer,
  ToolBar,
  Wrapper,
} from '../../components';
import {colors, containerAttr} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';

const carts = [
  {
    id: 1,
    name: 'Airpods',
    image: require('../../assets/common/img-product.png'),
    price: '$199',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Airpods',
    image: require('../../assets/common/img-product.png'),
    price: '$199',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Airpods',
    image: require('../../assets/common/img-product.png'),
    price: '$199',
    quantity: 1,
  },
];

const Cart = ({navigation}) => {
  const renderCartItem = useCallback(({item}) => {
    return (
      <Row style={styles.cartItem}>
        <Image
          source={require('../../assets/common/img-product.png')}
          style={styles.img}
        />
        <Spacer w={sizes.xii} />

        <Section f={1} style={styles.center}>
          <Row
            f={1}
            justify={'space-between'}
            style={{alignItems: 'flex-start'}}>
            <CText
              style={{flex: 1}}
              numLine={2}
              type="button"
              color={colors.dark}>
              Nike Air Zoom Pegasus 36 Miami Nike Air Zoom
            </CText>
            <Row>
              <Spacer w={sizes.xvi} />
              <CButton wrapcontent resetpm>
                <Icon name="hearto" size={sizes.xviii} color={colors.grey} />
              </CButton>
              <Spacer w={sizes.viii} />
              <CButton wrapcontent resetpm>
                <Icon name="delete" size={sizes.xviii} color={colors.grey} />
              </CButton>
            </Row>
          </Row>
          <Row justify={'space-between'}>
            <CText type="button" color={colors.primary}>
              $199
            </CText>
            <Row style={styles.wrapperQuantity}>
              <CButton
                wrapcontent
                resetpm
                background={colors.white}
                style={[styles.button, styles.bLeft]}>
                <Icon name="minus" size={sizes.xvi} />
              </CButton>
              <CText
                type="button"
                color={colors.grey}
                w={sizes.xxxx}
                textAlign={'center'}>
                1
              </CText>
              <CButton
                wrapcontent
                resetpm
                background={colors.white}
                style={[styles.button, styles.bRight]}>
                <Icon name="plus" size={sizes.xvi} />
              </CButton>
            </Row>
          </Row>
        </Section>
      </Row>
    );
  }, []);

  return (
    <Wrapper statusbar>
      <ToolBar
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark}>
            Your Cart
          </CText>
        }
        style={containerAttr.bottomLine}
      />
      <Section p={sizes.xvi} f={1}>
        <FlatList
          data={carts}
          renderItem={renderCartItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={<Spacer h={sizes.xvi} />}
          showsVerticalScrollIndicator={false}
        />
      </Section>

      <Section f={1} p={sizes.xvi}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            style={containerAttr.resetpm}
            showRightIcon
            leftNode={<Spacer w={sizes.xxii} />}
            rightNode={
              <CButton
                wrapcontent
                background={colors.primary}
                style={styles.promo}>
                <CText type="button">Apply</CText>
              </CButton>
            }
          />
          <Spacer h={sizes.xvi} />
          <Section p={sizes.xvi} style={[containerAttr.borderColor]}>
            <Row justify={'space-between'}>
              <CText>Item (3)</CText>
              <CText color={colors.dark}>$598.86</CText>
            </Row>
            <Spacer h={sizes.xii} />
            <Row justify={'space-between'}>
              <CText>Shipping</CText>
              <CText color={colors.dark}>$40</CText>
            </Row>
            <Spacer h={sizes.xii} />
            <Row justify={'space-between'}>
              <CText>Import charges</CText>
              <CText color={colors.dark}>$128.23</CText>
            </Row>
            <Spacer h={sizes.xii} />
            <Spacer f={1} h={1} color={colors.light} />
            <Spacer h={sizes.xii} />
            <Row justify={'space-between'}>
              <CText type="button" color={colors.dark}>
                Total Price
              </CText>
              <CText type="button" color={colors.primary}>
                $128.23
              </CText>
            </Row>
          </Section>
          <Spacer h={sizes.xvi} />
          <CButton background={colors.primary}>
            <CText type="button">Check Out</CText>
          </CButton>
        </ScrollView>
      </Section>
    </Wrapper>
  );
};

export default Cart;

const styles = StyleSheet.create({
  promo: {
    borderTopStartRadius: 0,
    borderBottomStartRadius: 0,
  },
  bRight: {
    borderTopStartRadius: 0,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 3,
    borderTopEndRadius: 3,
  },
  bLeft: {
    borderBottomEndRadius: 0,
    borderTopEndRadius: 0,
    borderTopStartRadius: 3,
    borderBottomStartRadius: 3,
  },
  button: {
    width: 32,
    height: 23,
  },
  wrapperQuantity: {
    backgroundColor: colors.light,
    borderRadius: 5,
    padding: 1,
  },
  center: {
    justifyContent: 'space-between',
  },
  img: {
    width: 72,
    height: 72,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  cartItem: {
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 5,
    padding: sizes.xvi,
  },
});
