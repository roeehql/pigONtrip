import { useState } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
const MyPageView = dynamic(() => import("./MyPageView"));

import useHandleInput from "@hooks/useHandleInput";
import { useAppDispatch, useAppSelector } from "@store/store";
import { editUserName, removeUserName } from "@store/userNameSlice";
import { resetItem } from "@store/contentsSlice";

import { USER_NAME } from "util/constant/query.constant";

const MyPage: NextPage = () => {
  const userName = useAppSelector((state) => state.userName.value);
  const dispatch = useAppDispatch();

  const [active, setActive] = useState(false);
  const { value: editName, onChange: onEditNameChange } =
    useHandleInput(userName);

  const handleAllContentsDelete = () => {
    const checkUSer = confirm(
      "전체 삭제를 하시면 모든 내용과 설정한 닉네임이 모두 사라집니다. 그래도 삭제하시겠습니까?"
    );
    if (checkUSer) {
      dispatch(removeUserName());
      localStorage.clear();
      dispatch(resetItem());
    } else {
      return false;
    }
  };

  const handleEditUserName = () => {
    dispatch(editUserName(editName));
    localStorage.setItem(USER_NAME, editName);
    setActive(false);
  };

  const data = {
    active,
    userName,
    editName,
    onEditNameChange,
    handleEditUserName,
    onCancelButtonClick: () => setActive(false),
    onEditButtonClick: () => setActive(true),
    handleAllContentsDelete,
  };
  return <MyPageView data={data} />;
};

export default MyPage;
