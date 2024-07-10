import React from 'react';
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
import {data} from '../../example/data/product';
import {colors} from '../../utils/styles';
import {WINDOW_WIDTH, sizes} from '../../utils/styles/sizes';
import {useSelector} from 'react-redux';
import {stackName} from '../../navigator/routeName';

const Favorite = ({navigation}) => {
  const {favorites} = useSelector(state => state.cart);
  const renderProduct = ({item, index}) => {
    return (
      <>
        <ProductItem
          title={item.product_name}
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
            Favorite Product
          </CText>
        }
        style={styles.line}
      />
      <FlatList
        data={favorites}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 16}}
        columnWrapperStyle={{gap: 12}}
        ItemSeparatorComponent={<Section h={12} />}
      />
    </Wrapper>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  line: {
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },
});
