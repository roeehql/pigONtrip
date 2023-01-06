import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const MyPage = dynamic(() => import("@components/mypage/MyPage"));

const UserInfo: NextPage = () => {
  return (
    <>
      <Head>
        <title>돼지는 여행 중 : MyPage</title>
      </Head>
      <MyPage />
    </>
  );
};

export default UserInfo;
