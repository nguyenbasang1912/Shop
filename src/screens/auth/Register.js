import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {CButton, CText, Input, Spacer, Wrapper} from '../../components';
import {useForm} from '../../hooks';
import {colors, containerAttr} from '../../utils/styles';

const Register = ({navigation}) => {
  const {t} = useTranslation();
  const {error, submitForm, values, onChangeValue} = useForm({
    initialValues: {
      name: '',
      email: '',
      pass: '',
      repass: '',
    },
    validation: yup.object({
      name: yup.string().required(t('error.input.name.required')),
      email: yup
        .string()
        .email(t('error.input.email.invalid'))
        .required(t('error.input.email.required')),
      pass: yup
        .string()
        .min(8, t('error.input.password.minLength'))
        .required(t('error.input.password.required')),
      repass: yup
        .string()
        .oneOf([yup.ref('pass'), null], t('error.input.password.notMatch'))
        .required(t('error.input.password.requiredCFPass')),
    }),
    onSubmit: values => {
      console.log(values);
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
        <CText type="label">{t('register.label')}</CText>
        <Spacer h={8} />
        <CText>{t('register.description')}</CText>
        <Spacer h={28} />
        <Input
          style={{alignSelf: 'stretch'}}
          value={values.name}
          onChange={text => onChangeValue('name', text)}
          err={error('name')}
          placeholder={t('input.name')}
          leftIcon="person"
        />
        <Spacer h={8} />
        <Input
          style={{alignSelf: 'stretch'}}
          value={values.email}
          leftIcon={'email'}
          onChange={text => onChangeValue('email', text)}
          err={error('email')}
          placeholder={t('input.email')}
        />
        <Spacer h={8} />
        <Input
          style={{alignSelf: 'stretch'}}
          isPassword
          value={values.pass}
          onChange={text => onChangeValue('pass', text)}
          err={error('pass')}
          placeholder={t('input.password')}
          leftIcon="locked"
        />
        <Spacer h={8} />
        <Input
          style={{alignSelf: 'stretch'}}
          isPassword
          value={values.repass}
          onChange={text => onChangeValue('repass', text)}
          err={error('repass')}
          placeholder={t('input.repass')}
          leftIcon="locked"
        />
        <Spacer h={16} />
        <CButton
          background={colors.primary}
          style={{shadowColor: colors.shadow, elevation: 10}}
          onPress={() => {
            submitForm();
          }}>
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
    </ScrollView>
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
