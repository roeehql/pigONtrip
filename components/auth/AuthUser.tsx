import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserName,
  editUserName,
  selectUser,
} from "@data/store/userNameSlice";
import { setToast } from "@data/store/toastSlice";
import AuthForm from "./AuthForm";
import { useGetUserName } from "@hooks/useGetUserName";
import { setItem } from "@data/store/contentsSlice";

const AuthUser = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { isUserLoggedIn } = useGetUserName();
  const userList = useSelector(selectUser);

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
    dispatch(createUserName({ name: userName.trim(), isLoggedIn: true }));
  };

  const handleLogin = () => {
    dispatch(editUserName({ name: userName.trim(), isLoggedIn: true }));
  };

  const handleFormBtnClick = () => {
    checkDuplication() ? handleLogin() : handleSignup();
    if (userList.length > 2) {
      showMessage();
    } else {
      dispatch(setItem());
      dispatch(setToast({ type: "success", text: "입장 성공!" }));
      router.push("/home");
    }
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      router.push("/home");
    }
  }, [router, isUserLoggedIn]);

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
