import {View, Text} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';

const useForm = ({initialValues, validation, onSubmit, ...props}) => {
  const {values, setFieldValue, touched, errors, submitForm, ...rest} =
    useFormik({
      initialValues,
      validationSchema: validation,
      onSubmit,
      ...props,
    });

  const onChangeValue = (fieldName, value) => {
    setFieldValue(fieldName, value);
  };

  const error = name => {
    return touched[name] && errors[name];
  };

  return {
    values,
    onChangeValue,
    error,
    submitForm,
    ...rest,
  };
};

export default useForm;
