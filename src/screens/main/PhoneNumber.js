import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CButton,
  CText,
  Input,
  Section,
  Spacer,
  Title,
  ToolBar,
  Wrapper,
} from '../../components';
import {colors, containerAttr} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';

const PhoneNumber = ({navigation}) => {
  return (
    <Wrapper statusbar>
      <ToolBar
        leftComponent={
          <CButton wrapcontent resetpm onPress={() => navigation.goBack()}>
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
        <Input type={'number-pad'} leftIcon={'mobile-alt'} placeholder='Enter phone number' />
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

export default PhoneNumber;

const styles = StyleSheet.create({});
