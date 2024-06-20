import React from 'react';
import {
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

const Home = () => {
  return (
    <ScrollView style={containerAttr.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Wrapper statusbar background={colors.transparent}>
          <Section
            p={16}
            style={{borderBottomWidth: 1, borderBottomColor: colors.light}}>
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
        </Wrapper>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
