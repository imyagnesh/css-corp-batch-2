import React, { memo, useEffect, useMemo } from 'react';
import {
  LoginFields,
  LoginInitValues,
  LoginInitValuesType,
} from './loginUtils';
import Checkbox from '@components/Checkbox';
import Link from '@components/Link';
import FormikForm from '@components/FormikForm';
import { Field, FormikHelpers } from 'formik';
import { User } from 'types/UserType';
import { useNavigate } from 'react-router-dom';
import { useRootStore } from 'context/rootStoreContext';

// type Props = {
//   onLogin: (
//     values: LoginInitValuesType,
//     actions: FormikHelpers<LoginInitValuesType>,
//   ) => void;
//   user: User;
// };

const Login = () => {
  const { authStore } = useRootStore();

  return (
    <FormikForm
      fields={LoginFields}
      initialValues={LoginInitValues}
      onSubmit={authStore.onLogin}
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
