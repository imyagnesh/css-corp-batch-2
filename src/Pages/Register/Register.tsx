import FormikForm from '@components/FormikForm';
import { FormikErrors, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';
import {
  RegisterFields,
  RegisterInitValues,
  RegisterInitValuesType,
} from './registerUtils';

type Props = {
  onRegister: (
    values: RegisterInitValuesType,
    actions: FormikHelpers<RegisterInitValuesType>,
  ) => void;
};

const Register = ({ onRegister }: Props) => {
  const validate = useCallback((values: RegisterInitValuesType) => {
    const errors: FormikErrors<RegisterInitValuesType> = {};
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'password and confirm password should same.';
    }
    return errors;
  }, []);

  return (
    <FormikForm
      validate={validate}
      fields={RegisterFields}
      initialValues={RegisterInitValues}
      onSubmit={onRegister}
      btnText="Sign Up"
    />
  );
};

export default Register;
