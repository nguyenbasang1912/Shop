import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Wrapper from '../../components/Wrapper';
import ToolBar from '../../components/ToolBar';
import CButton from '../../components/CButton';
import Icon from 'react-native-vector-icons/AntDesign';
import CText from '../../components/CText';
import {colors, containerAttr} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';
import Section from '../../components/Section';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Spacer from '../../components/Spacer';

const PhoneNumber = () => {
  return (
    <Wrapper statusbar>
      <ToolBar
        leftComponent={
          <CButton wrapcontent resetpm>
            <Icon name="left" size={sizes.xviii} color={colors.grey} />
          </CButton>
        }
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark}>
            Phone Number
          </CText>
        }
        style={containerAttr.bottomLine}
      />
      <Section p={sizes.xvi}>
        <Title title={'Phone Number'} />
        <Spacer h={sizes.xii} />
        <Input type={'number-pad'} leftIcon={'mobile-alt'} />
      </Section>
      <Spacer f={1} />
      <Section p={sizes.xxvi}>
        <CButton background={colors.primary}>
          <CText type="button">Next</CText>
        </CButton>
      </Section>
    </Wrapper>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({});
