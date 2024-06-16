import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet} from 'react-native';
import CButton from '../../components/CButton';
import CText from '../../components/CText';
import Input from '../../components/Input';
import Row from '../../components/Row';
import Spacer from '../../components/Spacer';
import Wrapper from '../../components/Wrapper';
import {colors} from '../../utils/styles';

const Register = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <Wrapper ph={16} align={'center'}>
      <Spacer h={70} />
      <Image
        source={require('../../assets/common/icon.png')}
        style={styles.icon}
      />
      <Spacer h={18} />
      <CText type="label">{t('register.label')}</CText>
      <Spacer h={8} />
      <CText>{t('register.description')}</CText>
      <Spacer h={28} />
      <Input placeholder={t('input.name')} />
      <Spacer h={8} />
      <Input placeholder={t('input.email')} />
      <Spacer h={8} />
      <Input placeholder={t('input.password')} leftIcon="locked" />
      <Spacer h={8} />
      <Input placeholder={t('input.repass')} leftIcon="locked" />
      <Spacer h={16} />
      <CButton>
        <CText type="button" color={colors.white}>
          {t('register.signup')}
        </CText>
      </CButton>
      <Spacer h={21} />
      <CText>
        {t('register.account')}{' '}
        <CText
          type="button"
          color={colors.primary}
          onPress={() => navigation.goBack()}>
          {t('login.signin')}
        </CText>
      </CText>
    </Wrapper>
  );
};

export default Register;

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
