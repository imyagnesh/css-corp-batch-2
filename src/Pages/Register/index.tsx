import FormikForm from '@components/FormikForm';
import { FormikHelpers } from 'formik';
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

  return (
    <FormikForm
      fields={RegisterFields}
      initialValues={RegisterInitValues}
      onSubmit={onSubmit}
      btnText="Sign Up"
    />
  );
};

export default Register;
