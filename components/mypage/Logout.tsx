import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@data/store/store";
import { editUserName, saveUserName } from "@data/store/userNameSlice";
import Button from "@components/atomic/Button";
import { useState } from "react";
import Confirm from "@components/atomic/Confirm";

const Logout = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const userName = useAppSelector((state) =>
    state.userName.filter((user) => user.isLoggedIn === true)
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    setShowConfirm(false);
    dispatch(editUserName({ name: userName[0].name, isLoggedIn: false }));
    dispatch(saveUserName());
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
        large={true}
        type={"button"}
        onClick={() => setShowConfirm(true)}
      />
    </>
  );
};

export default Logout;
