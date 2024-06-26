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

const Favorite = ({navigation}) => {
  const renderProduct = ({item, index}) => {
    console.log(index);
    return (
      <>
        <ProductItem
          title={item.title}
          price={item.price}
          source={item.image}
          onPress={() => console.log(item)}
          cost={item.cost}
          saleoff={item.saleoff}
          rate={item.rate}
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
        data={data}
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
