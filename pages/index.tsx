import Head from "next/head";
import AuthUser from "@components/auth/AuthUser";

const Auth = () => {
  return (
    <>
      <Head>
        <title>돼지는 여행 중</title>
      </Head>
      <AuthUser />
    </>
  );
};

export default Auth;
