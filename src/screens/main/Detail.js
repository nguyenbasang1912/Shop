import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CButton,
  CText,
  Carousel,
  Comment,
  ProductItem,
  RatingBar,
  Row,
  Section,
  Spacer,
  Title,
  ToolBar,
  Wrapper,
} from '../../components';
import {fetchDetailProduct, fetchProducts} from '../../configs/api';
import {stackName} from '../../navigator/routeName';
import {colors, containerAttr} from '../../utils/styles';
import {WINDOW_WIDTH, sizes} from '../../utils/styles/sizes';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductToCart,
} from '../../store/thunk/cart';
import {
  addProductIntoFavorites
} from '../../store/thunk/favorite'

const Detail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => {
    return state.favorite;
  });

  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(route.params.productId);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const scrollRef = useRef(null);

  const isFavorite = useMemo(() => {
    return favorites.some(product => {
      return product._id === productId;
    });
  }, [favorites, productId]);

  useEffect(() => {
    fetchDetailProduct(productId)
      .then(product => {
        setColor(product.product_colors[0]);
        setSize(product.product_sizes[0]);
        setProduct(product);
        return fetchProducts(1, 'cate_id', product.category_id);
      })
      .then(products => {
        setProducts(products.products);
        scrollRef.current.scrollTo({
          y: 0,
          animated: true,
        });
      })
      .catch(console.log);
  }, [productId]);

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
          onPress={() => setProductId(item._id)}
          cost={item.saleOff && `$${item.product_price}`}
          saleoff={item.saleOff && item.saleOff + '% off'}
          width={141}
        />
        <Spacer w={sizes.xvi} />
      </>
    );
  };

  return (
    <>
      <ScrollView
        ref={scrollRef}
        style={containerAttr.container}
        showsVerticalScrollIndicator={false}>
        <Wrapper statusbar>
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
                {product.product_name || ''}
              </CText>
            }
            rightComponent={
              <Row f={0.5} justify={'flex-end'}>
                <Icon
                  name="search1"
                  size={sizes.xviii}
                  color={colors.grey}
                  onPress={() => {
                    console.log('right');
                  }}
                />
                <Spacer w={16} />
                <Icon
                  name="ellipsis1"
                  size={sizes.xviii}
                  color={colors.grey}
                  onPress={() => {
                    console.log('right');
                  }}
                />
              </Row>
            }
          />
          <Section>
            <Carousel
              data={product.product_images || []}
              renderItem={({item}) => {
                return <Image source={{uri: item}} style={styles.img} />;
              }}
            />

            <Spacer h={sizes.xxii} />

            <Section ph={sizes.xvi}>
              <Row justify={'space-between'}>
                <CText
                  size={sizes.xx}
                  color={colors.dark}
                  type="button"
                  numLine={2}
                  style={styles.name}>
                  {product.product_name || ''}
                </CText>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(addProductIntoFavorites({productId: product._id}));
                  }}>
                  <Icon
                    name={isFavorite ? 'heart' : 'hearto'}
                    color={isFavorite ? colors.red : colors.grey}
                    size={sizes.xxiv}
                  />
                </TouchableOpacity>
              </Row>

              <Spacer h={8} />
              <RatingBar rate={4.5} disable />
              <Spacer h={16} />
              <CText type="button" color={colors.primary} size={sizes.xx}>
                {(product.product_price * (1 - product.saleOff / 100)).toFixed(
                  2,
                ) || ''}
              </CText>

              <Spacer h={24} />

              {/** List size */}
              <Section>
                <Title title={'Select Size'} />
                <Spacer h={12} />
                <FlatList
                  data={product.product_sizes || []}
                  renderItem={({item}) => (
                    <>
                      <TouchableOpacity
                        onPress={() => setSize(item)}
                        style={[
                          styles.circle,
                          item === size && styles.selectedCircle,
                        ]}>
                        <CText
                          size={sizes.xiv}
                          color={colors.dark}
                          type="button">
                          {item}
                        </CText>
                      </TouchableOpacity>
                      <Spacer w={16} />
                    </>
                  )}
                  style={containerAttr.w100}
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                />
              </Section>
              <Spacer h={24} />

              {/** List color */}
              <Section>
                <Title title={'Select Size'} />
                <Spacer h={12} />
                <FlatList
                  data={product.product_colors || []}
                  renderItem={({item}) => (
                    <>
                      <TouchableOpacity
                        style={[styles.circle, {backgroundColor: item}]}
                        onPress={() => setColor(item)}>
                        {item === color && <View style={styles.selectedDot} />}
                      </TouchableOpacity>
                      <Spacer w={16} />
                    </>
                  )}
                  style={containerAttr.w100}
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                />
              </Section>

              {/**Description */}
              <Spacer h={24} />
              <Section>
                <Title title={'Specification'} />
                <CText>{product.product_description || ''}</CText>
              </Section>

              <Spacer h={sizes.xxiv} />
              {/**Comment */}
              <Section>
                <Title
                  title={'Review Product'}
                  more={'See More'}
                  onClickMore={() => navigation.navigate(stackName.review)}
                />
                <Row>
                  <RatingBar disable rate={5} />
                  <Spacer w={8} />
                  <CText type="button" color={colors.grey} size={sizes.x}>
                    4.5
                  </CText>
                  <Spacer w={3} />
                  <CText size={sizes.x}>(5 Review)</CText>
                </Row>
                <Spacer h={sizes.xvi} />
                <Comment />
              </Section>

              <Spacer h={sizes.xxiv} />
              <Section>
                <Title title={'You Might Also Like'} />
                <Spacer h={sizes.xxii} />
                <FlatList
                  data={products}
                  renderItem={renderProduct}
                  keyExtractor={item => item._id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </Section>
            </Section>
          </Section>
        </Wrapper>
        <Spacer h={90} />
      </ScrollView>
      <Section p={sizes.xvi} style={styles.addToCart}>
        <CButton
          background={colors.primary}
          style={styles.shadowbutton}
          onPress={() => {
            dispatch(
              addProductToCart({
                productId: product._id,
                size: size,
                color: color,
              }),
            );
          }}>
          <CText type="button">Add To Cart</CText>
        </CButton>
      </Section>
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
  shadowbutton: {
    elevation: 10,
    shadowColor: colors.shadow,
  },
  addToCart: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  selectedDot: {
    width: 24,
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  selectedCircle: {
    borderColor: colors.primary,
  },
  circle: {
    width: 48,
    height: 'auto',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.light,
    backgroundColor: colors.white,
  },
  name: {
    width: '80%',
  },
  img: {
    width: WINDOW_WIDTH,
    height: 'auto',
    aspectRatio: 2,
    backgroundColor: colors.light,
  },
});
