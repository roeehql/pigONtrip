import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { removeUserName } from "@data/store/userNameSlice";
import Button from "@components/atomic/Button";
import Confirm from "@components/atomic/Confirm";
import { useGetUserName } from "@hooks/useGetUserName";

const SignOut = () => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { userName } = useGetUserName();

  const handleUserDelete = () => {
    dispatch(removeUserName(userName));
    router.push("/");
  };

  return (
    <>
      <Button
        text="별명삭제"
        type="button"
        large={false}
        onClick={() => setOpenConfirm(true)}
      />
      {openConfirm && (
        <Confirm
          text={"별명을 삭제하시겠습니까?"}
          positiveAnswer={"삭제"}
          handleConfirmClick={handleUserDelete}
          onCancelClick={() => setOpenConfirm(false)}
        />
      )}
    </>
  );
};

export default SignOut;
