import React from 'react';
import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CText from '../../components/CText';
import Row from '../../components/Row';
import Section from '../../components/Section';
import Spacer from '../../components/Spacer';
import ToolBar from '../../components/ToolBar';
import Wrapper from '../../components/Wrapper';
import {colors, containerAttr} from '../../utils/styles';
import {WINDOW_WIDTH, sizes} from '../../utils/styles/sizes';
import RatingBar from '../../components/RatingBar';
import CButton from '../../components/CButton';
import Title from '../../components/Title';
import Comment from '../../components/Comment';
import {data} from '../../example/data/product';
import ProductItem from '../../components/ProductItem';

const Detail = ({navigation}) => {
  const renderProduct = ({item, index}) => {
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
          width={141}
        />
        <Spacer w={16} />
      </>
    );
  };

  return (
    <>
      <ScrollView
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
                Nike Air Max 270 Rea...
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
            <Image
              source={require('../../assets/common/img-product.png')}
              style={styles.img}
              resizeMode="contain"
            />

            <Spacer h={40} />

            <Section ph={sizes.xvi}>
              <Row justify={'space-between'}>
                <CText
                  size={sizes.xx}
                  color={colors.dark}
                  type="button"
                  numLine={2}
                  style={styles.name}>
                  Nike Air Zoom Pegasus 36 Miami
                </CText>
                <Icon name="hearto" color={colors.grey} size={sizes.xxiv} />
              </Row>

              <Spacer h={8} />
              <RatingBar rate={4.5} disable />
              <Spacer h={16} />
              <CText type="button" color={colors.primary} size={sizes.xx}>
                {'$299'}
              </CText>

              <Spacer h={24} />

              {/** List size */}
              <Section>
                <Title title={'Select Size'} />
                <Spacer h={12} />
                <FlatList
                  data={['XS', 'S', 'M', 'L', 'XL', 'XXL']}
                  renderItem={({item}) => (
                    <>
                      <View style={styles.circle}>
                        <CText
                          size={sizes.xiv}
                          color={colors.dark}
                          type="button">
                          {item}
                        </CText>
                      </View>
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
                  data={Object.entries(colors)}
                  renderItem={({item}) => (
                    <>
                      <View style={[styles.circle, {backgroundColor: item[1]}]}>
                        <View style={styles.selectedDot} />
                      </View>
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
                <CText>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod lacinia augue, eu accumsan leo lobortis lorem vitae.
                </CText>
                <CText>
                  Donec euismod lacinia augue, eu accumsan leo lobortis lorem
                  vitae. Donec euismod lac
                </CText>
              </Section>

              <Spacer h={sizes.xxiv} />
              {/**Comment */}
              <Section>
                <Title title={'Review Product'} more={'See More'} />
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
                  data={data}
                  renderItem={renderProduct}
                  keyExtractor={item => item.id}
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
        <CButton background={colors.primary} style={styles.shadowbutton}>
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
