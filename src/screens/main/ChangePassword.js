import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Wrapper from '../../components/Wrapper';
import ToolBar from '../../components/ToolBar';
import CButton from '../../components/CButton';
import CText from '../../components/CText';
import {colors, containerAttr} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';
import Section from '../../components/Section';
import Title from '../../components/Title';
import Spacer from '../../components/Spacer';
import Icon from 'react-native-vector-icons/AntDesign';
import Input from '../../components/Input';

const ChangePassword = () => {
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
            Change Password
          </CText>
        }
        style={containerAttr.bottomLine}
      />

      <Section p={sizes.xxvi}>
        <Section>
          <Title title={'Old password'} />
          <Spacer h={sizes.xii} />
          <Input leftIcon="locked" />
        </Section>
        <Spacer h={sizes.xxiv} />
        <Section>
          <Title title={'Old password'} />
          <Spacer h={sizes.xii} />
          <Input leftIcon="locked" />
        </Section>
        <Spacer h={sizes.xxiv} />
        <Section>
          <Title title={'Old password'} />
          <Spacer h={sizes.xii} />
          <Input leftIcon="locked" />
        </Section>
      </Section>
      <Spacer f={1} />
      <Section p={sizes.xxvi}>
        <CButton background={colors.primary}>
          <CText type="button">Save</CText>
        </CButton>
      </Section>
    </Wrapper>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
