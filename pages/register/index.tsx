import FormikForm from "@components/FormikForm";
import { useAuth } from "@context/authContext";
import AuthLayout from "@layout/AuthLayout";
import Head from "next/head";
import { ReactElement } from "react";
import {
  RegisterFields,
  RegisterInitValues,
  RegisterInitValueType,
} from "../../formikFields/registerFields";

type Props = {};

const Register = (props: Props) => {
  const { register } = useAuth();
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <FormikForm
        initialValues={RegisterInitValues}
        fields={RegisterFields}
        onSubmit={(values: RegisterInitValueType) => register(values)}
        btnText="Register"
      />
    </>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
