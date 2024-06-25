import React from 'react';
import {
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CButton from '../../components/CButton';
import Carousel from '../../components/Carousel';
import Input from '../../components/Input';
import Row from '../../components/Row';
import Section from '../../components/Section';
import Spacer from '../../components/Spacer';
import Wrapper from '../../components/Wrapper';
import {data} from '../../example/data/slide';
import {colors, containerAttr} from '../../utils/styles';
import Title from '../../components/Title';
import CategoryItem from '../../components/CategoryItem';
import {sizes} from '../../utils/styles/sizes';
import ProductItem from '../../components/ProductItem';
import {stackName} from '../../navigator/routeName';

const Home = ({navigation}) => {
  const renderCategories = ({item, index}) => {
    return (
      <>
        <CategoryItem source={item.image} title={item.title} />
        <Spacer w={sizes.xx} />
      </>
    );
  };

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
    <ScrollView
      style={containerAttr.container}
      showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Wrapper statusbar background={colors.transparent}>
          <Section p={16} style={styles.section}>
            <Row style={{padding: 0}}>
              <Input placeholder="Search input" leftIcon="search" />
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
          <Carousel data={data} />
          <Section ph={16}>
            <Title
              title="Category"
              more="More Category"
              titleMoreColor={colors.primary}
              onClickMore={() => console.log('more')}
            />
            <Spacer h={12} />
            <FlatList
              data={[
                {
                  title: 'Category 1',
                  image: require('../../assets/common/icon.png'),
                },
                {
                  title: 'Category 2',
                  image: require('../../assets/common/icon.png'),
                },
                {
                  title: 'Category 3',
                  image: require('../../assets/common/icon.png'),
                },
              ]}
              renderItem={renderCategories}
              horizontal
            />
            <Spacer h={24} />
            <Title
              title={'Flash Sale'}
              more={'See More'}
              onClickMore={() => navigation.navigate(stackName.detail)}
            />
            <Spacer h={12} />
            <FlatList
              horizontal
              data={[
                {
                  id: '1',
                  title: 'Nike Air Max 270 React ENG',
                  price: '$199',
                  image: require('../../assets/common/img-product.png'),
                  cost: '$299',
                  saleoff: '10%',
                },
                {
                  id: '2',
                  title: 'Nike Air Max 270 React ENG',
                  price: '$199',
                  image: require('../../assets/common/img-product.png'),
                  cost: '$299',
                  saleoff: '10%',
                },
                {
                  id: '3',
                  title: 'Nike Air Max 270 React ENG',
                  price: '$199',
                  image: require('../../assets/common/img-product.png'),
                  cost: '$299',
                  saleoff: '10%',
                },
              ]}
              renderItem={renderProduct}
              showsHorizontalScrollIndicator={false}
            />

            <Spacer h={24} />
            <Title title={'Mega Sale'} more={'See More'} />
            <Spacer h={12} />
            <FlatList
              horizontal
              data={[
                {
                  id: '1',
                  title: 'Nike Air Max 270 React ENG',
                  price: '$199',
                  image: require('../../assets/common/img-product.png'),
                  cost: '$299',
                  saleoff: '10%',
                },
                {
                  id: '2',
                  title: 'Nike Air Max 270 React ENG',
                  price: '$199',
                  image: require('../../assets/common/img-product.png'),
                  cost: '$299',
                  saleoff: '10%',
                },
                {
                  id: '3',
                  title: 'Nike Air Max 270 React ENG',
                  price: '$199',
                  image: require('../../assets/common/img-product.png'),
                  cost: '$299',
                  saleoff: '10%',
                },
                {
                  id: '4',
                  title: 'Nike Air Max 270 React ENG',
                  price: '$199',
                  image: require('../../assets/common/img-product.png'),
                  cost: '$299',
                  saleoff: '10%',
                },
                {
                  id: '5',
                  title: 'Nike Air Max 270 React ENG',
                  price: '$199',
                  image: require('../../assets/common/img-product.png'),
                  cost: '$299',
                  saleoff: '10%',
                },
                {
                  id: '6',
                  title: 'Nike Air Max 270 React ENG',
                  price: '$199',
                  image: require('../../assets/common/img-product.png'),
                  cost: '$299',
                  saleoff: '10%',
                },
              ]}
              renderItem={renderProduct}
              showsHorizontalScrollIndicator={false}
            />
          </Section>
        </Wrapper>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  section: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});
