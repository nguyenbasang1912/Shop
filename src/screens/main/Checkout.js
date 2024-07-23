import React, {useEffect, useMemo, useState} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
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
import axiosInstance from '../../configs/axiosInstance';

const Checkout = ({navigation}) => {
  const {cart} = useSelector(state => state.cart);
  const [promo, setPromo] = useState('');
  const [estimate, setEstimate] = useState(null);
  const [promoInfo, setPromoInfo] = useState({
    applySuccess: false,
    err: '',
  });

  const selectedProducts = useMemo(() => {
    return cart.filter(item => item.is_checked);
  }, [cart]);

  const countProducts = useMemo(() => {
    return selectedProducts.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [selectedProducts]);

  useEffect(() => {
    estimatePrice();
  }, []);

  const estimatePrice = async (promo = undefined) => {
    try {
      const res = await axiosInstance.post('/api/cart/estimate-amount', {
        promo,
      });
      setEstimate(res.data);
      setPromoInfo({
        applySuccess: true,
        err: '',
      });
    } catch (err) {
      if (promo) {
        setPromoInfo({
          applySuccess: false,
          err: 'Invalid promo code',
        });
      }
    }
  };

  return (
    <Wrapper statusbar>
      <ScrollView style={styles.scrollable}>
        <ToolBar
          leftComponent={
            <CButton wrapcontent resetpm onPress={() => navigation.goBack()}>
              <Icon name="left" size={sizes.xviii} color={colors.grey} />
            </CButton>
          }
          centerComponent={
            <CText
              type="button"
              size={sizes.xvi}
              color={colors.dark}
              numLine={1}>
              Checkout
            </CText>
          }
          style={containerAttr.bottomLine}
        />
        <TouchableOpacity>
          <Section p={sizes.xvi}>
            <Row>
              <Section style={{alignSelf: 'flex-start'}} f={1}>
                <Row>
                  <Icon
                    name="enviromento"
                    size={sizes.xvi}
                    color={colors.primary}
                  />
                  <Spacer w={sizes.xvi} />

                  <Section>
                    <CText type="button" color={colors.dark}>
                      Address
                    </CText>
                    <CText>{'123 Main St, Anytown, USA'}</CText>
                    <CText>{'0999xxxxxxx'}</CText>
                  </Section>
                </Row>
              </Section>
              <Icon name="right" size={sizes.xvi} color={colors.grey} />
            </Row>
          </Section>
        </TouchableOpacity>
        <Spacer style={containerAttr.topLine} h={sizes.xvi} />
        <Section ph={sizes.xvi}>
          {selectedProducts.map(product => {
            return (
              <Section key={product._id}>
                <Row>
                  <Image
                    source={{uri: product.productId.product_thumbnail}}
                    style={styles.image}
                  />
                  <Section>
                    <CText type="button" color={colors.dark}>
                      {product.productId.product_name}
                    </CText>
                    <CText>
                      Size: {product.size}, Color: {product.color}
                    </CText>
                  </Section>
                  <Spacer f={1} />
                  <CText>x{product.quantity}</CText>
                </Row>
                <Spacer h={sizes.xvi} />
              </Section>
            );
          })}
        </Section>
        <Spacer style={containerAttr.topLine} />
        <Section p={sizes.xvi}>
          <Input
            err={promoInfo.err}
            onChange={setPromo}
            value={promo}
            placeholder="Enter Cupon Code"
            showRightIcon
            style={[containerAttr.resetpm, styles.paddingPromo]}
            rightNode={
              <CButton
                onPress={() => estimatePrice(promo)}
                wrapcontent
                background={colors.primary}
                style={styles.button}>
                <CText type="button">Apply</CText>
              </CButton>
            }
          />
        </Section>
        <Spacer style={containerAttr.topLine} />
        <Section p={sizes.xvi}>
          <Section style={styles.box} p={sizes.xvi}>
            <Row justify={'space-between'}>
              <CText>Item({countProducts})</CText>
              <CText color={colors.dark}>${estimate?.totalAmount || 0}</CText>
            </Row>
            <Spacer h={sizes.xii} />
            <Row justify={'space-between'}>
              <CText>Discount</CText>
              <CText color={colors.dark}>
                -${(estimate?.totalAmount - estimate?.amountAfterUsePromo).toFixed(2) || 0}
              </CText>
            </Row>
            <Spacer h={sizes.xii} />
            <Spacer style={styles.dashed} />
            <Spacer h={sizes.xii} />
            <Row justify={'space-between'}>
              <CText type="button" color={colors.dark}>
                Total Price
              </CText>
              <CText type="button" color={colors.primary}>
                ${estimate?.amountAfterUsePromo || 0}
              </CText>
            </Row>
          </Section>
        </Section>
      </ScrollView>
      <Section p={sizes.xvi}>
        <CButton background={colors.primary}>
          <CText type="button">Checkout</CText>
        </CButton>
      </Section>
    </Wrapper>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  dashed: {
    borderTopWidth: 2,
    borderTopColor: colors.light,
    borderStyle: 'dashed',
  },
  box: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.light,
  },
  paddingPromo: {
    paddingLeft: 16,
  },
  button: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  image: {
    width: 65,
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: colors.light,
    resizeMode: 'cover',
    marginEnd: 12,
  },
  scrollable: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
