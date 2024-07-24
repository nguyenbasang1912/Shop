import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CButton,
  Checkbox,
  CText,
  Input,
  Row,
  Section,
  Spacer,
  ToolBar,
  Wrapper,
} from '../../components';
import {colors, containerAttr} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';
import {useForm} from '../../hooks';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {createNewAddress, updateAddress} from '../../store/thunk/user';

const NewAddress = ({navigation, route}) => {
  const {type = 'new', id = ''} = route?.params || {};
  const {userInfo} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'edit') {
      const address = userInfo.address.find(addr => addr._id === id);
      if (address) {
        onChangeValue('name', address.name);
        onChangeValue('address', address.address);
        onChangeValue('phone', address.phone);
      }
    }
  }, [id]);

  const {error, submitForm, values, onChangeValue} = useForm({
    initialValues: {
      name: '',
      address: '',
      phone: userInfo.phone || '',
    },
    validation: yup.object({
      name: yup.string().required('Name is required'),
      address: yup.string().required('Address is required'),
      phone: yup.string().required('Phone number is required'),
    }),
    onSubmit: (values, {resetForm}) => {
      if (type !== 'edit') {
        dispatch(createNewAddress(values));
      } else {
        dispatch(
          updateAddress({
            id: id,
            data: {
              name: values.name,
              address: values.address,
              phone: values.phone,
            },
          }),
        );
      }
      resetForm();
      navigation.goBack();
    },
  });

  return (
    <Wrapper statusbar>
      <ToolBar
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark}>
            {type !== 'edit' ? 'Add address' : 'Edit address'}
          </CText>
        }
        leftComponent={
          <CButton wrapcontent resetpm onPress={() => navigation.goBack()}>
            <Icon name="left" size={sizes.xviii} color={colors.grey} />
          </CButton>
        }
        style={containerAttr.bottomLine}
      />

      <Section p={sizes.xvi}>
        <Input
          value={values.name}
          err={error('name')}
          placeholder="Enter name"
          onChange={text => onChangeValue('name', text)}
        />
        <Spacer h={sizes.xvi} />
        <Input
          value={values.address}
          err={error('address')}
          placeholder="Enter address"
          onChange={text => onChangeValue('address', text)}
        />
        <Spacer h={sizes.xvi} />
        <Input
          value={values.phone}
          err={error('phone')}
          keyboardType="number-pad"
          onChange={text => onChangeValue('phone', text)}
          placeholder="Enter phone"
        />
        <Spacer h={sizes.xvi} />
        <Row>
          <Checkbox callback={isChecked => {}} />
          <Spacer w={sizes.viii} />
          <CText type="button" color={colors.dark}>
            Save as default address
          </CText>
        </Row>
      </Section>
      <Spacer f={1} />
      <Section p={sizes.xvi}>
        <CButton background={colors.primary} onPress={submitForm}>
          <CText type="button">
            {type === 'edit' ? 'Update address' : 'Add new address'}
          </CText>
        </CButton>
      </Section>
    </Wrapper>
  );
};

export default NewAddress;
