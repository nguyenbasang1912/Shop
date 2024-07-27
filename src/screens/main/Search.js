import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  CButton,
  CText,
  ProductItem,
  Section,
  ToolBar,
  Wrapper,
} from '../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {fetchProducts} from '../../configs/api';
import {sizes, WINDOW_WIDTH} from '../../utils/styles/sizes';
import {stackName} from '../../navigator/routeName';
import {colors} from '../../utils/styles';

const Search = ({navigation, route}) => {
  const {keyword} = route.params;
  const [productInfo, setProductInfo] = useState(null);
  useEffect(() => {
    fetchProducts(1, 'search', keyword)
      .then(res => setProductInfo(res))
      .catch(console.log);
  }, [keyword]);

  const handleLoad = () => {};

  const renderProduct = useCallback(({item}) => {
    return (
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
    );
  }, []);

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
            Search Results for "{keyword}"
          </CText>
        }
        style={styles.line}
      />
      <FlatList
        onEndReached={handleLoad}
        onEndReachedThreshold={0}
        data={productInfo?.products || []}
        renderItem={renderProduct}
        keyExtractor={item => item._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 16}}
        columnWrapperStyle={{gap: 12}}
        ItemSeparatorComponent={<Section h={12} />}
        ListEmptyComponent={<CText size={sizes.xviii}>{"Keyword don't match any product"}</CText>}
      />
    </Wrapper>
  );
};

export default Search;

const styles = StyleSheet.create({});
