import { useState } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
const MyPageView = dynamic(() => import("./MyPageView"));

import { useHandleInput } from "@hooks/useHandleText";
import { useAppDispatch, useAppSelector } from "@store/store";
import { editUserName } from "@store/userNameSlice";

import { USER_NAME } from "util/constant/query.constant";

const MyPage: NextPage = () => {
  const userName = useAppSelector((state) => state.userName.value);
  const dispatch = useAppDispatch();

  const [isOnEdit, setIsOnEdit] = useState(false);
  const { value: editName, onChange: onEditNameChange } =
    useHandleInput(userName);

  const handleEditUserName = () => {
    dispatch(editUserName(editName));
    localStorage.setItem(USER_NAME, editName);
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
