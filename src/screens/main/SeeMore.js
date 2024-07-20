import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {
  CButton,
  CText,
  ProductItem,
  Section,
  Spacer,
  ToolBar,
  Wrapper,
} from '../../components';
import {stackName} from '../../navigator/routeName';
import {resetProduct} from '../../store/slices/cart';
import {fetchProducts, fetchSaleOffProducts} from '../../store/thunk/cart';
import {colors} from '../../utils/styles';
import {sizes, WINDOW_WIDTH} from '../../utils/styles/sizes';

const SeeMore = ({navigation, route}) => {
  const {productInfo, loading} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState(route.params.categoryId);

  useEffect(() => {
    if (categoryId === 'sale_off') {
      dispatch(resetProduct());
      dispatch(fetchSaleOffProducts({page: 1}));
    } else {
      console.log('sss');
      dispatch(resetProduct());
      dispatch(fetchProducts({page: 1, categoryId: categoryId}));
    }
  }, [categoryId]);

  console.log(productInfo.products);

  const renderProduct = useCallback(({item, index}) => {
    return (
      <>
        <ProductItem
          title={item.product_name || ''}
          price={`$${
            item.saleOff
              ? (item.product_price * (1 - item.saleOff / 100)).toFixed(2)
              : item.product_price
          }`}
          source={{uri: item.product_thumbnail}}
          onPress={() =>
            navigation.navigate(stackName.detail, {productId: item._id})
          }
          cost={item.saleOff && item.product_price}
          saleoff={item.saleOff && item.saleOff + '% off'}
          width={WINDOW_WIDTH / 2 - 16 - 6}
        />
      </>
    );
  }, []);

  const handleLoad = () => {
    if (route.params.title === 'Sale Off') {
      if (productInfo.page.currentPage + 1 <= productInfo.page.maxPages) {
        dispatch(
          fetchSaleOffProducts({
            page: productInfo.page.currentPage + 1,
          }),
        );
      }
    } else {
      if (productInfo.page.currentPage + 1 <= productInfo.page.maxPages) {
        dispatch(
          fetchProducts({
            page: productInfo.page.currentPage + 1,
          }),
        );
      }
    }
  };

  return (
    <Wrapper statusbar>
      <ToolBar
        leftComponent={
          <CButton wrapcontent resetpm onPress={() => navigation.goBack()}>
            <Icon name="left" size={sizes.xviii} color={colors.grey} />
          </CButton>
        }
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark} numLine={1}>
            {route.params.title}
          </CText>
        }
        style={styles.line}
      />
      <FlatList
        onEndReached={handleLoad}
        onEndReachedThreshold={0}
        data={productInfo.products}
        renderItem={renderProduct}
        keyExtractor={item => item._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 16}}
        columnWrapperStyle={{gap: 12}}
        ItemSeparatorComponent={<Section h={12} />}
        ListFooterComponent={
          loading && (
            <>
              <Spacer h={sizes.xvi} />
              <ActivityIndicator size={sizes.xxvi} color={colors.grey} />
            </>
          )
        }
      />
    </Wrapper>
  );
};

export default SeeMore;

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});
