import Head from "next/head";
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

export default Login;
