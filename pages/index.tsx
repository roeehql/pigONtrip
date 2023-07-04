import AuthUser from "@components/auth/AuthUser";
import { useAppSelector } from "@data/store/store";
import Head from "next/head";
import { useRouter } from "next/router";

const Auth = () => {
  const router = useRouter();
  const userName = useAppSelector((state) =>
    state.userName.filter((user) => user.isLoggedIn === true)
  );

  if (userName.length !== 0) {
    router.push("/home");
  }
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
