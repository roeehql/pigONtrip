import { useState } from "react";
import { useRouter } from "next/router";
import { resetItem } from "@data/store/contentsSlice";
import { useAppDispatch } from "@data/store/store";
import { resetUserName } from "@data/store/userNameSlice";
import Button from "@components/atomic/Button";
import Confirm from "@components/atomic/Confirm";

const DeleteAllButton = () => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAllContentsDelete = () => {
    dispatch(resetUserName());
    localStorage.clear();
    dispatch(resetItem());
    router.push("/");
  };

  return (
    <div className="flex flex-row justify-around items-center w-full px-4 border-solid border-grey rounded-lg">
      <Button
        text="전체 데이터 삭제"
        type="button"
        large={true}
        onClick={() => setOpenConfirm(false)}
      />
      {openConfirm && (
        <Confirm
          text={
            "전체 삭제를 하시면 모든 내용과 설정한 닉네임이 모두 사라집니다. 그래도 삭제하시겠습니까?"
          }
          positiveAnswer={"전체 삭제"}
          handleConfirmClick={handleAllContentsDelete}
          onCancelClick={() => setOpenConfirm(false)}
        />
      )}
    </div>
  );
};

export default DeleteAllButton;
