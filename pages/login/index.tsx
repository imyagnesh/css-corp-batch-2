import Checkbox from "@components/Checkbox";
import FormikForm from "@components/FormikForm";
import { useSession, signIn, signOut } from "next-auth/react";
import { useAuth } from "@context/authContext";
import AuthLayout from "@layout/AuthLayout";
import { Field } from "formik";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import styles from "../styles/Login.module.css";
import {
  LoginFields,
  loginInitValues,
  LoginInitValueType,
} from "./loginFields";

type Props = {};

const Login = (props: Props) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
  // const { login } = useAuth();
  // return (
  //   <>
  //     <Head>
  //       <title>Login</title>
  //     </Head>
  //     <FormikForm
  //       initialValues={loginInitValues}
  //       fields={LoginFields}
  //       onSubmit={(values: LoginInitValueType) => login(values)}
  //       btnText="Login"
  //     >
  //       <div className="flex items-center justify-between">
  //         <Field name="remember_me" component={Checkbox}>
  //           Remember Me
  //         </Field>
  //         <Link href="/forgotPassword">
  //           <a>Forgot your password?</a>
  //         </Link>
  //       </div>
  //     </FormikForm>
  //   </>
  // );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
