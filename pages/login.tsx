import AuthLayout from "@layout/AuthLayout";
import Head from "next/head";
import { ReactElement } from "react";
import styles from "../styles/Login.module.css";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.login}>Login</div>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
