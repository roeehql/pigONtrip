import dynamic from "next/dynamic";
const TopButton = dynamic(() => import("@components/atomic/TopButton"));
const WriteLayout = dynamic(() => import("@components/writeform/WriteLayout"));
const Contents = dynamic(() => import("@components/contents/Contents"));

const PigHome = () => {
  return (
    <main className="flex flex-col justify-center items-center w-screen min-h-screen p-0 m-0 box-border">
      <WriteLayout />
      <Contents />
      <TopButton />
    </main>
  );
};

export default PigHome;
