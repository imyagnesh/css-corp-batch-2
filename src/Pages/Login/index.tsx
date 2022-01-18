import React from 'react';
import { Formik, Field, Form } from 'formik';
import LockIcon from '@assets/icons/lock.svg';
import {
  LoginFields,
  LoginInitValues,
  LoginInitValuesType,
} from './loginUtils';
import Checkbox from '@components/Checkbox';
import Link from '@components/Link';
import Button from '@components/Button';

interface Props {}

const Login = (props: Props) => {
  const onSubmit = (values: LoginInitValuesType) => {
    console.log(values);
  };

  return (
    <Formik initialValues={LoginInitValues} onSubmit={onSubmit}>
      {() => (
        <Form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {LoginFields.map((x) => (
              <Field key={x.name} {...x} />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Field name="remember_me" component={Checkbox}>
              Remember Me
            </Field>
            <Link href="#">Forgot your password?</Link>
          </div>
          <Button type="submit">Sign In</Button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
