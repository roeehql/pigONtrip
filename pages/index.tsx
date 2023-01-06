import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const Contents = dynamic(() => import("@components/contents/Contents"), {
  suspense: true,
});
import FormSkeleton from "@components/atomic/FormSkeleton";
const WriteForm = dynamic(() => import("@components/writeform/WriteForm"), {
  suspense: true,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>돼지는 여행 중 : Pig ON Trip</title>
      </Head>
      <main>
        <Suspense fallback={<FormSkeleton />}>
          <WriteForm />
          <Contents />
        </Suspense>
      </main>
    </>
  );
}
