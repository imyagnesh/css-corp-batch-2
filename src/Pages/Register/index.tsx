import FormikForm from '@components/FormikForm';
import React from 'react';
import { RegisterFields, RegisterInitValues } from './registerUtils';

interface Props {}

const Register = (props: Props) => {
  const onSubmit = () => {};

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
