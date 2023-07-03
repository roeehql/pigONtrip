import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import AuthForm from "./AuthForm";
import { useAppDispatch, useAppSelector } from "@store/store";
import {
  createUserName,
  editUserName,
  getUserList,
  saveUserName,
} from "@store/userNameSlice";

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
    dispatch(saveUserName());
    dispatch(getUserList());
  };

  const handleLogin = () => {
    dispatch(editUserName({ name: userName, isLoggedIn: true }));
    dispatch(saveUserName());
    dispatch(getUserList());
  };

  const handleFormBtnClick = () => {
    checkDuplication() ? handleLogin() : handleSignup();
    if (userList.length > 3) showMessage();
    router.push("/home");
  };

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
