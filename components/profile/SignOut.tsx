import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { removeUserName, selectUserName } from "@data/store/userNameSlice";
import Button from "@components/atomic/Button";
import Confirm from "@components/atomic/Confirm";
import { signOutUser } from "@data/store/userListSlice";
import { signOutItem } from "@data/store/contentsSlice";

const SignOut = () => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const userName = useSelector(selectUserName);

  const handleUserDelete = () => {
    dispatch(removeUserName());
    dispatch(signOutUser(userName));
    dispatch(signOutItem(userName));
    router.push("/");
  };

  return (
    <>
      <Button
        text="별명삭제"
        type="button"
        ariaLabel="별명 삭제 하기"
        large={false}
        onClick={() => setOpenConfirm(true)}
      />
      {openConfirm && (
        <Confirm
          text={
            "별명을 삭제하시면 별명에 등록된 데이터가 모두 사라집니다. 별명을 삭제하시겠습니까?"
          }
          positiveAnswer={"삭제"}
          handleConfirmClick={handleUserDelete}
          onCancelClick={() => setOpenConfirm(false)}
        />
      )}
    </>
  );
};

export default SignOut;
