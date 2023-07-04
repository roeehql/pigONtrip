import { useState } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

import { useHandleInput } from "@hooks/useHandleText";
import { useAppDispatch, useAppSelector } from "@data/store/store";
import { editUserName, saveUserName } from "@data/store/userNameSlice";

const MyPageView = dynamic(() => import("./MyPageView"));

const MyPage: NextPage = () => {
  const userName = useAppSelector((state) =>
    state.userName.filter((user) => user.isLoggedIn === true)
  );
  const dispatch = useAppDispatch();

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

  return <MyPageView data={data} />;
};

export default MyPage;
