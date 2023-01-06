import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const MyMap = dynamic(() => import("@components/map/MyMap"));

const TripMap: NextPage = () => {
  return (
    <>
      <Head>
        <title>돼지는 여행 중 : Map</title>
      </Head>
      <MyMap />
    </>
  );
};

export default TripMap;
