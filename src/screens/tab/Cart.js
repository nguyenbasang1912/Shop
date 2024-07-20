import React, {useCallback} from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {
  CButton,
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

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart);
  
  const renderCartItem = useCallback(({item}) => {
    return (
      <Row style={styles.cartItem}>
        <Image
          // source={require('../../assets/common/img-product.png')}
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
                  console.log('id: ',item.productId._id)
                  dispatch(
                    deleteProduct({
                      productId: item.productId._id,
                    }),
                  );
                }}>
                <Icon name="delete" size={sizes.xviii} color={colors.grey} />
              </CButton>
            </Row>
          </Row>
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
        />
      </Section>
      <Section ph={sizes.xvi} pv={sizes.xvi}>
        <CButton background={colors.primary}>
          <CText type="button">Check Out</CText>
        </CButton>
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
