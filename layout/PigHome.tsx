import dynamic from "next/dynamic";
import TopButton from "@components/atomic/TopButton";
const Contents = dynamic(() => import("@components/contents/Contents"));
import WriteForm from "@components/writeform/WriteForm";

const PigHome = () => {
  return (
    <main className="flex flex-col justify-center items-center w-screen min-h-screen p-0 m-0 box-border">
      <WriteForm />
      <Contents />
      <TopButton />
    </main>
  );
};

export default PigHome;
