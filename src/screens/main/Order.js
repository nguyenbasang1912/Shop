import React, {Fragment, useEffect} from 'react';
import {Image, SectionList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {
  CButton,
  CText,
  Row,
  Section,
  Spacer,
  Title,
  ToolBar,
  Wrapper,
} from '../../components';
import {getOrder} from '../../store/thunk/order';
import {colors, containerAttr} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';
import {stackName} from '../../navigator/routeName';

const Order = ({navigation}) => {
  const {orders} = useSelector(state => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder());
  }, []);

  const renderItem = ({item}) => {
    return (
      <Section style={styles.box} p={sizes.xvi}>
        <Row justify={'space-between'}>
          <Section>
            <CText type="button" color={colors.dark}>
              Order Date
            </CText>
            <CText>{item.updatedAt.split('T')[0]}</CText>
          </Section>
          <Section>
            <CText type="button" color={colors.dark}>
              Total Amount
            </CText>
            <CText>${item.total_amount}</CText>
          </Section>
        </Row>
        {item.products.map(product => {
          return (
            <Fragment key={product._id}>
              <Spacer h={sizes.xvi} />
              <Section>
                <Row>
                  <Image
                    source={{uri: product.productId.product_thumbnail}}
                    style={styles.image}
                  />
                  <Spacer w={sizes.xvi} />

                  <Section f={1}>
                    <Row f={1}>
                      <CText>{product.productId.product_name}</CText>
                      <Spacer f={1} />
                      <CText>x{product.quantity}</CText>
                    </Row>

                    <Row justify={'space-between'}>
                      <CText>Price: ${product.productId.product_price}</CText>
                      {product.isComment && (
                        <CButton
                          wrapcontent
                          resetpm
                          isOutlineButton
                          style={styles.comment}>
                          <CText
                            type="button"
                            color={colors.primary}
                            onPress={() =>
                              navigation.navigate(stackName.writeReview, {
                                productId: product.productId._id,
                                orderId: item._id
                              })
                            }>
                            Write Comment
                          </CText>
                        </CButton>
                      )}
                    </Row>
                  </Section>
                </Row>
              </Section>
            </Fragment>
          );
        })}
        <Spacer h={sizes.xii} />
        <Spacer style={styles.line} />
        <Spacer h={sizes.xii} />
        <Row>
          <CText>Address: </CText>
          <CText>{item.shipping_address}</CText>
        </Row>
        <Spacer h={sizes.xii} />
        <Spacer style={styles.line} />
        <Spacer h={sizes.xii} />

        <Row justify={'space-between'}>
          <CText type="button" color={colors.dark}>
            Order Status:
          </CText>
          <CText type="button" color={colors.primary}>
            {item.status}
          </CText>
        </Row>
      </Section>
    );
  };

  const renderHeader = ({section}) => (
    <Section pv={sizes.xvi}>
      <Title title={'Date'} more={section.title} />
    </Section>
  );
  return (
    <Wrapper statusbar>
      <ToolBar
        leftComponent={
          <CButton wrapcontent resetpm onPress={() => navigation.goBack()}>
            <Icon name={'left'} size={sizes.xviii} color={colors.grey} />
          </CButton>
        }
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark}>
            Order
          </CText>
        }
        style={containerAttr.bottomLine}
      />

      <SectionList
        sections={orders}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <Spacer h={sizes.xvi} />}
      />
    </Wrapper>
  );
};

export default Order;

const styles = StyleSheet.create({
  line: {
    borderTopWidth: 1,
    borderTopColor: colors.light,
    borderStyle: 'dashed',
  },
  comment: {
    borderRadius: 16,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  list: {
    padding: sizes.xvi,
  },
  box: {
    borderRadius: sizes.xvi,
    borderColor: colors.light,
    borderWidth: 1,
  },
});
