import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Spinner from "@components/atomic/Spinner";
const TopButton = dynamic(() => import("@components/TopButton"));
const Contents = dynamic(() => import("@components/contents/Contents"), {
  suspense: true,
});
const WriteForm = dynamic(() => import("@components/writeform/WriteForm"), {
  suspense: true,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>돼지는 여행 중 : Pig ON Trip</title>
      </Head>
      <main className="flex flex-col justify-center items-center w-screen min-h-screen p-0 m-0 box-border">
        <Suspense fallback={<Spinner />}>
          <WriteForm />
          <Contents />
        </Suspense>
        <TopButton />
      </main>
    </>
  );
}
