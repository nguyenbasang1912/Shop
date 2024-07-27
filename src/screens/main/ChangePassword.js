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

const ChangePassword = ({navigation}) => {
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
            Change Password
          </CText>
        }
        style={containerAttr.bottomLine}
      />

      <Section p={sizes.xxvi}>
        <Section>
          <Title title={'Old password'} />
          <Spacer h={sizes.xii} />
          <Input leftIcon="locked" placeholder="Enter old password" />
        </Section>
        <Spacer h={sizes.xxiv} />
        <Section>
          <Title title={'New Password'} />
          <Spacer h={sizes.xii} />
          <Input leftIcon="locked" placeholder="Enter new password" />
        </Section>
        <Spacer h={sizes.xxiv} />
        <Section>
          <Title title={'New Password Again'} />
          <Spacer h={sizes.xii} />
          <Input leftIcon="locked" placeholder="Enter confirm password" />
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
