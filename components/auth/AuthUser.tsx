import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "@data/store/toastSlice";
import AuthForm from "./AuthForm";
import { handleStorage } from "@data/browserStorage/localStorages";
import { USERLIST, USERNAME } from "@data/browserStorage/keys.constant";
import {
  createUserName,
  selectUser,
  setUserList,
} from "@data/store/userListSlice";
import { saveUserName } from "@data/store/userNameSlice";

const AuthUser = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const userList = useSelector(selectUser);

  const showMessage = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };

  const checkDuplication = () => {
    dispatch(setUserList());
    return userList.length === 0
      ? false
      : userList.some((user) => user === userName);
  };

  const handleSignup = () => {
    dispatch(createUserName(userName));
    handleStorage.setStorage(USERNAME, userName);
    dispatch(saveUserName(userName));
  };

  const handleLogin = () => {
    handleStorage.setStorage(USERNAME, userName);
    dispatch(saveUserName(userName));
  };

  const handleFormBtnClick = () => {
    if (userList.length > 2) {
      showMessage();
    } else {
      checkDuplication() ? handleLogin() : handleSignup();
      dispatch(setToast({ type: "success", text: "입장 성공!" }));
      router.push("/home");
    }
  };

  useEffect(() => {
    if (handleStorage.getContentsStorage(USERNAME)) {
      router.push("/home");
    }
  }, [router]);

  const signUpPropsData = {
    userName,
    message,
    buttonText: "입장하기",
    title: "별명을 입력하고 입장하세요!",
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) =>
      setUserName(e.target.value),
    handleFormBtnClick: () => handleFormBtnClick(),
    handleEnter: (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleFormBtnClick();
    },
  };

  return <AuthForm {...signUpPropsData} />;
};

export default AuthUser;
