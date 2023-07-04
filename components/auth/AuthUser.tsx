import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthForm from "./AuthForm";
import { useAppDispatch, useAppSelector } from "@data/store/store";
import {
  createUserName,
  editUserName,
  getUserList,
} from "@data/store/userNameSlice";
import { setToast } from "@data/store/toastSlice";

const AuthUser = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userList = useAppSelector((state) => state.userName);

  const showMessage = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };

  const checkDuplication = () => {
    return userList.length === 0
      ? false
      : userList.some((user) => user.name === userName);
  };

  const handleSignup = () => {
    dispatch(createUserName({ name: userName, isLoggedIn: true }));
  };

  const handleLogin = () => {
    dispatch(editUserName({ name: userName, isLoggedIn: true }));
  };

  const handleFormBtnClick = () => {
    checkDuplication() ? handleLogin() : handleSignup();
    if (userList.length > 2) {
      showMessage();
    } else {
      dispatch(setToast({ type: "success", text: "입장 성공!" }));
      router.push("/home");
    }
  };

  useEffect(() => {
    dispatch(getUserList());
    if (userList.some((user) => user.isLoggedIn === true)) router.push("/home");
  }, [dispatch]);

  const signUpPropsData = {
    userName,
    message,
    buttonText: "입장하기",
    title: "별명을 입력하고 입장하세요!",
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) =>
      setUserName(e.target.value),
    handleFormBtnClick: () => handleFormBtnClick(),
  };

  return <AuthForm {...signUpPropsData} />;
};

export default AuthUser;
