import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet} from 'react-native';
import CButton from '../../components/CButton';
import CText from '../../components/CText';
import Input from '../../components/Input';
import Row from '../../components/Row';
import Spacer from '../../components/Spacer';
import Wrapper from '../../components/Wrapper';
import {colors, containerAttr} from '../../utils/styles';
import {stackName} from '../../navigator/routeName';
import useForm from '../../hooks/useForm';
import * as yup from 'yup';
import {GoogleLogin, GoogleLogout} from '../../configs/google/googleSignIn';

const Login = ({navigation}) => {
  const {t} = useTranslation();
  const {error, submitForm, values, onChangeValue} = useForm({
    initialValues: {
      email: '',
      pass: '',
    },
    validation: yup.object({
      email: yup
        .string()
        .email(t('error.input.email.invalid'))
        .required(t('error.input.email.required')),
      pass: yup
        .string()
        .min(8, t('error.input.password.minLength'))
        .required(t('error.input.password.required')),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <ScrollView style={containerAttr.container}>
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
        <Spacer h={28} />
        <Input
          err={error('email')}
          value={values.email}
          onChange={text => onChangeValue('email', text)}
          placeholder={t('input.email')}
        />
        <Spacer h={8} />
        <Input
          isPassword
          err={error('pass')}
          value={values.pass}
          onChange={text => onChangeValue('pass', text)}
          placeholder={t('input.password')}
          leftIcon="locked"
        />
        <Spacer h={16} />
        <CButton
          style={{shadowColor: colors.shadow, elevation: 30}}
          onPress={() => {
            submitForm();
          }}>
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
          onPress={async () => {
            await GoogleLogin();
          }}
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

        <Spacer h={16} />

        <CText color={colors.primary} type="button">
          {t('login.forgotPassword')}
        </CText>
        <CText>
          {t('login.account')}{' '}
          <CText
            type="button"
            color={colors.primary}
            onPress={() => navigation.navigate(stackName.register)}>
            {t('login.register')}
          </CText>
        </CText>
      </Wrapper>
    </ScrollView>
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
