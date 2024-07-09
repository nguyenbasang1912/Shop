import React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, Image, ScrollView, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {CButton, CText, Input, Row, Spacer, Wrapper} from '../../components';
import {GoogleLogin} from '../../configs/google/googleSignIn';
import {useForm} from '../../hooks';
import {stackName} from '../../navigator/routeName';
import {colors, containerAttr} from '../../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/thunk/auth';
import { sizes } from '../../utils/styles/sizes';

const Login = ({navigation}) => {
  const {loading, error: errorResponse} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const {t} = useTranslation();
  const {error, submitForm, values, onChangeValue} = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validation: yup.object({
      email: yup
        .string()
        .email(t('error.input.email.invalid'))
        .required(t('error.input.email.required')),
      password: yup
        .string()
        .min(8, t('error.input.password.minLength'))
        .required(t('error.input.password.required')),
    }),
    onSubmit: values => {
      dispatch(login(values));
    },
  });

  return (
    <ScrollView style={containerAttr.container}>
      <Wrapper ph={16} align={'center'} statusbar>
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
          leftIcon={'email'}
          style={{alignSelf: 'stretch'}}
          err={error('email')}
          value={values.email}
          onChange={text => onChangeValue('email', text)}
          placeholder={t('input.email')}
        />
        <Spacer h={8} />
        <Input
          style={{alignSelf: 'stretch'}}
          isPassword
          err={error('password')}
          value={values.password}
          onChange={text => onChangeValue('password', text)}
          placeholder={t('input.password')}
          leftIcon="locked"
        />
        <Spacer h={16} />
        <CButton
          background={colors.primary}
          style={{shadowColor: colors.shadow, elevation: 10}}
          onPress={() => {
            submitForm();
          }}>
          {!loading ? <CText type="button" color={colors.white}>
            {t('login.signin')}
          </CText> : 
            <ActivityIndicator size={sizes.xviii}/>
          }
        </CButton>
        <Spacer h={21} />
        <Row>
          <Spacer f={1} h={0} color={colors.light} />
          <Spacer w={23} />
          <CText type="button" color={colors.grey}>
            {t('login.or')}
          </CText>
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

        <CText
          color={colors.primary}
          type="button"
          onPress={() => {
            navigation.navigate(stackName.tab);
          }}>
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
