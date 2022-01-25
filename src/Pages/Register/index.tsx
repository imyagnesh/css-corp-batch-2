import FormikForm from '@components/FormikForm';
import { AuthContext } from 'context/authContext';
import { FormikErrors, FormikHelpers } from 'formik';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthType } from 'types/authTypes';
import axiosInstance from 'utils/axios';
import {
  RegisterFields,
  RegisterInitValues,
  RegisterInitValuesType,
} from './registerUtils';

interface Props {}

const Register = (props: Props) => {
  const { onRegister } = useContext(AuthContext);

  const validate = useCallback((values: RegisterInitValuesType) => {
    const errors: FormikErrors<RegisterInitValuesType> = {};
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'password and confirm password should same.';
    }
    return errors;
  }, []);

  const test1 = { a: 1 };

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
