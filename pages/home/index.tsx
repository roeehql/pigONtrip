import Head from "next/head";
import { NextPage } from "next";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("layout/Header"));
const PigHome = dynamic(() => import("layout/PigHome"));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>돼지는 여행 중 : Pig ON Trip</title>
      </Head>
      <Header />
      <PigHome />
    </>
  );
};

export default Home;
