import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@store/store";
import { editUserName, saveUserName } from "@store/userNameSlice";
import Button from "@components/atomic/Button";

const Logout = () => {
  const userName = useAppSelector((state) =>
    state.userName.filter((user) => user.isLoggedIn === true)
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(editUserName({ name: userName[0].name, isLoggedIn: false }));
    dispatch(saveUserName());
    router.push("/");
  };
  return (
    <Button
      text={"로그아웃"}
      large={true}
      type={"button"}
      onClick={handleLogout}
    />
  );
};

export default Logout;
