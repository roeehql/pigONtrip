import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { editUserName } from "@data/store/userNameSlice";
import { useGetUserName } from "@hooks/useGetUserName";
import Button from "@components/atomic/Button";
import Confirm from "@components/atomic/Confirm";

const Logout = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { userName } = useGetUserName();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    setShowConfirm(false);
    dispatch(editUserName({ name: userName, isLoggedIn: false }));
    router.push("/");
  };

  return (
    <>
      {showConfirm && (
        <Confirm
          text={"로그아웃하시겠습니까?"}
          positiveAnswer={"네"}
          handleConfirmClick={handleLogout}
          onCancelClick={() => setShowConfirm(false)}
        />
      )}
      <Button
        text={"로그아웃"}
        large={false}
        type={"button"}
        onClick={() => setShowConfirm(true)}
      />
    </>
  );
};

export default Logout;
