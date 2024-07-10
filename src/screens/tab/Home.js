import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Carousel,
  CategoryItem,
  CButton,
  Input,
  ProductItem,
  Row,
  Section,
  Spacer,
  Title,
  Wrapper,
} from '../../components';
import {fetchChildrenCategories, fetchProducts} from '../../configs/api';
import {data} from '../../example/data/slide';
import {stackName, tabName} from '../../navigator/routeName';
import {colors, containerAttr} from '../../utils/styles';
import {sizes, WINDOW_WIDTH} from '../../utils/styles/sizes';

const Home = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [saleOff, setSaleOff] = useState([]);

  useEffect(() => {
    Promise.all([
      fetchChildrenCategories(),
      fetchProducts(1),
      fetchProducts(1, 'sale_off'),
    ])
      .then(response => {
        setCategories(response[0]);
        setProducts(response[1].products);
        setSaleOff(response[2].products);
      })
      .catch(console.log);
  }, []);

  const renderCategories = ({item, index}) => {
    return (
      <>
        <CategoryItem
          source={{uri: item.category_thumbnail}}
          title={item.category_name}
        />
        <Spacer w={sizes.xx} />
      </>
    );
  };

  const onPressExplore = () => {
    navigation.jumpTo(tabName.explore);
  };

  const renderProduct = useCallback(
    (width = 130, isPadding = true) =>
      ({item, index}) => {
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
              width={width}
            />
            {isPadding && <Spacer w={16} />}
          </>
        );
      },
    [],
  );

  return (
    <ScrollView
      style={containerAttr.container}
      showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Wrapper statusbar>
          {/** Search Bar */}
          <Section p={16} style={containerAttr.bottomLine}>
            <Row>
              <Input
                flex={1}
                placeholder="Search input"
                leftIcon="search"
                onFocusInput={onPressExplore}
              />
              <Spacer w={16} />
              <CButton
                wrapcontent
                resetpm
                background={colors.transparent}
                onPress={() => navigation.navigate(stackName.favorite)}>
                <Icon name="hearto" size={24} color={colors.grey} />
              </CButton>
              <Spacer w={16} />
              <CButton wrapcontent resetpm background={colors.transparent}>
                <Icon name="notification" size={24} color={colors.grey} />
              </CButton>
            </Row>
          </Section>
          <Spacer h={16} />
          {/** Carousel */}
          <Carousel data={data} />
          {/** Categories */}
          <Section ph={16}>
            <Title
              title="Category"
              more="More Category"
              titleMoreColor={colors.primary}
              onClickMore={() => console.log('more')}
            />
            <Spacer h={12} />
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={renderCategories}
              horizontal
            />
          </Section>
          <Section p={sizes.xvi}>
            {/** Sale off product */}
            <Section>
              <Title title={'Sale off'} more={'See more'} />
              <Spacer h={12} />
              <FlatList
                horizontal
                data={saleOff}
                renderItem={renderProduct()}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item._id}
              />
            </Section>
            <Spacer h={sizes.xxiv} />
            {/** Common product */}
            <Section>
              <Title title={'Recommended product'} more={'See more'} />
              <Spacer h={sizes.xii} />
              <FlatList
                scrollEnabled={false}
                data={products}
                renderItem={renderProduct(WINDOW_WIDTH / 2 - 16 - 6, false)}
                keyExtractor={item => item._id}
                ItemSeparatorComponent={<Spacer h={sizes.xii} />}
                columnWrapperStyle={containerAttr.gap12}
                numColumns={2}
              />
            </Section>
          </Section>
        </Wrapper>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Home;
