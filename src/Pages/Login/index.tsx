import React from 'react';
import {
  LoginFields,
  LoginInitValues,
  LoginInitValuesType,
} from './loginUtils';
import Checkbox from '@components/Checkbox';
import Link from '@components/Link';
import FormikForm from '@components/FormikForm';
import { Field } from 'formik';

interface Props {}

const Login = (props: Props) => {
  const onSubmit = (values: LoginInitValuesType) => {
    console.log(values);
  };

  return (
    <FormikForm
      fields={LoginFields}
      initialValues={LoginInitValues}
      onSubmit={onSubmit}
      btnText="Sign In"
    >
      <div className="flex items-center justify-between">
        <Field name="remember_me" component={Checkbox}>
          Remember Me
        </Field>
        <Link href="#">Forgot your password?</Link>
      </div>
    </FormikForm>
  );
};

export default Login;
