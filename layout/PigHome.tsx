import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@data/store/store";
import { setToast } from "@data/store/toastSlice";
import TopButton from "@components/atomic/TopButton";
import WriteForm from "@components/writeform/WriteForm";
const Contents = dynamic(() => import("@components/contents/Contents"));

const PigHome = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) =>
    state.userName.filter((user) => user.isLoggedIn === true)
  );

  if (userName.length === 0) {
    router.push("/");
    dispatch(setToast({ type: "warning", text: "잘못된 접근입니다." }));
  }
  return (
    <main className="flex flex-col justify-center items-center w-screen min-h-screen p-0 m-0 box-border">
      <WriteForm />
      <Contents />
      <TopButton />
    </main>
  );
};

export default PigHome;
