import FormikForm from '@components/FormikForm';
import { FormikErrors, FormikHelpers } from 'formik';
import React from 'react';
import axiosInstance from 'utils/axios';
import {
  RegisterFields,
  RegisterInitValues,
  RegisterInitValuesType,
} from './registerUtils';

interface Props {}

const Register = (props: Props) => {
  const onSubmit = async (
    values: RegisterInitValuesType,
    actions: FormikHelpers<RegisterInitValuesType>,
  ) => {
    try {
      const res = await axiosInstance.post('register', values);
      console.log(res);
    } catch (error) {
      console.log('error', error);
      let message = 'Something went wrong. Please try after sometime.';
      if (error instanceof Error) {
        message = error.message;
      }
      actions.setErrors({ serverError: message });
    }
  };

  const validate = (values: RegisterInitValuesType) => {
    const errors: FormikErrors<RegisterInitValuesType> = {};
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'password and confirm password should same.';
    }
    return errors;
  };

  return (
    <FormikForm
      validate={validate}
      fields={RegisterFields}
      initialValues={RegisterInitValues}
      onSubmit={onSubmit}
      btnText="Sign Up"
    />
  );
};

export default Register;
