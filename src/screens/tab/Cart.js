import React, {useCallback, useMemo} from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {
  CButton,
  Checkbox,
  CText,
  Row,
  Section,
  Spacer,
  ToolBar,
  Wrapper,
} from '../../components';
import {colors, containerAttr} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';
import {deleteProduct, updateQuantity} from '../../store/thunk/cart';
import { stackName } from '../../navigator/routeName';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart);

  const hasSelectedProduct = useMemo(() => {
    return cart.some(item => item.is_checked);
  })

  const renderCartItem = useCallback(({item}) => {
    return (
      <Row>
        <Checkbox
          initState={item.is_checked}
          callback={isChecked => {
            dispatch(
              updateQuantity({
                cartItemId: item._id,
                productId: item.productId._id,
                quantity: item.quantity,
                is_checked: isChecked,
              }),
            );
          }}
        />

        <Spacer w={sizes.xii} />

        <Row style={styles.cartItem} f={1}>
          <Image
            source={{uri: item.productId.product_thumbnail}}
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
                {item.productId.product_name}
              </CText>
              <Row>
                <Spacer w={sizes.xvi} />
                <CButton wrapcontent resetpm>
                  <Icon name="hearto" size={sizes.xviii} color={colors.grey} />
                </CButton>
                <Spacer w={sizes.viii} />
                <CButton
                  wrapcontent
                  resetpm
                  onPress={() => {
                    dispatch(
                      deleteProduct({
                        cartItemId: item._id,
                        productId: item.productId._id,
                      }),
                    );
                  }}>
                  <Icon name="delete" size={sizes.xviii} color={colors.grey} />
                </CButton>
              </Row>
            </Row>
            <CText color={colors.primary}>
              Color: {item.color}, size: {item.size}
            </CText>
            <Row justify={'space-between'}>
              <CText type="button" color={colors.primary}>
                {`$${item.productId.product_price}`}
              </CText>
              <Row style={styles.wrapperQuantity}>
                <CButton
                  wrapcontent
                  resetpm
                  onPress={() => {
                    dispatch(
                      updateQuantity({
                        cartItemId: item._id,
                        productId: item.productId._id,
                        quantity: item.quantity - 1,
                      }),
                    );
                  }}
                  background={colors.white}
                  style={[styles.button, styles.bLeft]}>
                  <Icon name="minus" size={sizes.xvi} />
                </CButton>
                <CText
                  type="button"
                  color={colors.grey}
                  w={sizes.xxxx}
                  textAlign={'center'}>
                  {item.quantity}
                </CText>
                <CButton
                  onPress={() => {
                    dispatch(
                      updateQuantity({
                        cartItemId: item._id,
                        productId: item.productId._id,
                        quantity: item.quantity + 1,
                      }),
                    );
                  }}
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
          data={cart}
          renderItem={renderCartItem}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={<Spacer h={sizes.xvi} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <CText type="button" color={colors.grey} size={sizes.xviii}>
              {'Nothing here'}
            </CText>
          }
        />
      </Section>
      {hasSelectedProduct && (
        <Section ph={sizes.xvi} pv={sizes.xvi}>
          <CButton background={colors.primary} onPress={() => navigation.navigate()}>
            <CText type="button">Check Out</CText>
          </CButton>
        </Section>
      )}
    </Wrapper>
  );
};

export default Cart;

const styles = StyleSheet.create({
  checkbox: {
    width: sizes.xvi,
    height: sizes.xvi,
  },
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
