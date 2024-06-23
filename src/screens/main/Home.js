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
import { sizes } from '../../utils/styles/sizes';

const Home = ({navigation}) => {
  const renderCategories = ({item, index}) => {
    return (
      <>
        <CategoryItem source={item.image} title={item.title} />
        <Spacer w={sizes.xx} />
      </>
    );
  };

  return (
    <ScrollView style={containerAttr.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Wrapper statusbar background={colors.transparent}>
          <Section p={16} style={styles.section}>
            <Row style={{padding: 0}}>
              <Input placeholder="Search input" leftIcon="search" />
              <Spacer w={16} />
              <CButton wrapcontent resetpm background={colors.transparent}>
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
            <Spacer h={12}/>
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
