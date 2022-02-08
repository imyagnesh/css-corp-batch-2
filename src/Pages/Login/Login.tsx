import React, { memo } from 'react';
import { LoginFields, LoginInitValues } from './loginUtils';
import Checkbox from '@components/Checkbox';
import Link from '@components/Link';
import FormikForm from '@components/FormikForm';
import { Field } from 'formik';
// import { AuthContext } from 'context/authContext';

interface Props {}

const Login = (props: Props) => {
  //   const { onLogin } = useContext(AuthContext);

  return (
    <FormikForm
      fields={LoginFields}
      initialValues={LoginInitValues}
      onSubmit={onLogin}
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

export default memo(Login);
