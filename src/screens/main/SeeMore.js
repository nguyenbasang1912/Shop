import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CButton,
  CText,
  ProductItem,
  Section,
  ToolBar,
  Wrapper,
} from '../../components';
import {stackName} from '../../navigator/routeName';
import {colors} from '../../utils/styles';
import {sizes, WINDOW_WIDTH} from '../../utils/styles/sizes';
import {fetchProducts} from '../../configs/api';

const SeeMore = ({navigation, route}) => {
  const {categoryId, title} = route.params;
  console.log(route.params)
  const [products, setProducts] = useState(null);
  useEffect(() => {
    if (title === 'Sale Off') {
      fetchProducts(1, 'sale_off').then(res => setProducts(res));
    } else {
      fetchProducts(1, 'cate_id', categoryId).then(res => setProducts(res));
    }
  }, [categoryId]);

  const renderProduct = useCallback(({item}) => {
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
    if (!products?.page) {
      return;
    }
    console.log(products.page.currentPage, products.page.maxPages);
    if (products.page.currentPage + 1 <= products.page.maxPages) {
      if (title === 'Sale Off') {
        fetchProducts(products.page.currentPage + 1, 'sale_off').then(res => {
          setProducts(prev => {
            return {
              ...res,
              products: [...prev.products, ...res.products],
            };
          });
        });
      } else {
        fetchProducts(
          products.page.currentPage + 1,
          'cate_id',
          categoryId,
        ).then(res => {
          setProducts(prev => {
            return {
              ...prev,
              products: [...prev.products, ...res.products],
            };
          });
        });
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
            {title}
          </CText>
        }
        style={styles.line}
      />
      <FlatList
        onEndReached={handleLoad}
        onEndReachedThreshold={0}
        data={products?.products || []}
        renderItem={renderProduct}
        keyExtractor={item => item._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 16}}
        columnWrapperStyle={{gap: 12}}
        ItemSeparatorComponent={<Section h={12} />}
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
