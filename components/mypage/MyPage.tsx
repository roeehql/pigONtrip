import { useState } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
const MyPageView = dynamic(() => import("./MyPageView"));

import { useHandleInput } from "@hooks/useHandleText";
import { useAppDispatch, useAppSelector } from "@store/store";
import { editUserName, saveUserName } from "@store/userNameSlice";
import { useRouter } from "next/router";
import Alert from "@components/atomic/Alert";

const MyPage: NextPage = () => {
  const userName = useAppSelector((state) =>
    state.userName.filter((user) => user.isLoggedIn === true)
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isOnEdit, setIsOnEdit] = useState(false);
  const { value: editName, onChange: onEditNameChange } = useHandleInput(
    userName[0]?.name
  );

  const handleEditUserName = () => {
    dispatch(editUserName({ name: editName, isLoggedIn: true }));
    dispatch(saveUserName());
    setIsOnEdit(false);
  };

  const data = {
    isOnEdit,
    userName,
    editName,
    onEditNameChange,
    handleEditUserName,
    onCancelButtonClick: () => setIsOnEdit(false),
    onEditButtonClick: () => setIsOnEdit(true),
  };

  if (userName.length === 0) {
    setTimeout(() => router.push("/"), 2000);
    return (
      <Alert
        title={"비정상적인 접근입니다."}
        message={"로그인 화면으로 이동합니다."}
      />
    );
  }

  return <MyPageView data={data} />;
};

export default MyPage;
