import React from 'react';
import {StyleSheet} from 'react-native';
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
import Icon from 'react-native-vector-icons/AntDesign';

const ChangeEmail = ({navigation}) => {
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
            Email
          </CText>
        }
        style={containerAttr.bottomLine}
      />

      <Section p={sizes.xvi}>
        <Title title={'Change Email'} />
        <Spacer h={sizes.xii} />
        <Input leftIcon={'email'} placeholder="Enter email" />
        <Spacer h={sizes.viii} />
        <CText color={colors.primary}>
          We Will Send verification to your New Email
        </CText>
      </Section>
      <Spacer f={1} />
      <Section p={sizes.xvi}>
        <CButton background={colors.primary}>
          <CText type="button">Change Email</CText>
        </CButton>
      </Section>
    </Wrapper>
  );
};

export default ChangeEmail;

const styles = StyleSheet.create({});
