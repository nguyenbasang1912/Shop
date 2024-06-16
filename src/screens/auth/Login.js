import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet } from 'react-native';
import CButton from '../../components/CButton';
import CText from '../../components/CText';
import Input from '../../components/Input';
import Row from '../../components/Row';
import Spacer from '../../components/Spacer';
import Wrapper from '../../components/Wrapper';
import { colors } from '../../utils/styles';
import { stackName } from '../../navigator/routeName';

const Login = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <Wrapper ph={16} align={'center'}>
      <Spacer h={70} />
      <Image
        source={require('../../assets/common/icon.png')}
        style={styles.icon}
      />
      <Spacer h={18} />
      <CText type="label">{t('login.label')}</CText>
      <Spacer h={8} />
      <CText>{t('login.description')}</CText>
      <Spacer h={28}/>
      <Input placeholder={t('input.email')} />
      <Spacer h={8} />
      <Input placeholder={t('input.password')} leftIcon="locked" />
      <Spacer h={16} />
      <CButton>
        <CText type="button" color={colors.white}>
          {t('login.signin')}
        </CText>
      </CButton>
      <Spacer h={21} />
      <Row>
        <Spacer f={1} h={0} color={colors.light} />
        <Spacer w={23} />
        <CText type="button">{t('login.or')}</CText>
        <Spacer w={23} />
        <Spacer f={1} h={0} color={colors.light} />
      </Row>
      <Spacer h={16} />
      <CButton
        borderColor={colors.light}
        isOutlineButton
        leftIcon={
          <Image
            source={require('../../assets/icons/google.png')}
            style={styles.iconsm}
          />
        }>
        <CText type="button" color={colors.grey}>
          {t('login.googleSignIn')}
        </CText>
      </CButton>
      <Spacer h={8} />
      <CButton
        borderColor={colors.light}
        isOutlineButton
        leftIcon={
          <Image
            source={require('../../assets/icons/facebook.png')}
            style={styles.iconsm}
          />
        }>
        <CText type="button" color={colors.grey}>
          {t('login.facebookSignIn')}
        </CText>
      </CButton>

      <Spacer h={16}/>

      <CText color={colors.primary} type='button'>
        {t('login.forgotPassword')}
      </CText>
      <CText>
        {t('login.account')}
        {' '}
        <CText type='button' color={colors.primary} onPress={() => navigation.navigate(stackName.register)}>
            {t('login.register')}
        </CText>
      </CText>
    </Wrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  icon: {
    width: 72,
    height: 72,
    alignSelf: 'center',
  },
  iconsm: {
    width: 16,
    height: 16,
  },
});
