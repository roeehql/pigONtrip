import Button from "@components/atomic/Button";
import { resetItem } from "@store/contentsSlice";
import { useAppDispatch } from "@store/store";
import { removeUserName } from "@store/userNameSlice";

const DeleteAllButton = () => {
  const dispatch = useAppDispatch();

  const handleAllContentsDelete = () => {
    const checkUSer = confirm(
      "전체 삭제를 하시면 모든 내용과 설정한 닉네임이 모두 사라집니다. 그래도 삭제하시겠습니까?"
    );
    if (checkUSer) {
      dispatch(removeUserName());
      localStorage.clear();
      dispatch(resetItem());
    } else {
      return false;
    }
  };

  return (
    <div className="flex flex-row justify-around items-center w-full px-4 border-solid border-grey rounded-lg">
      <Button
        text="전체 데이터 삭제"
        type="button"
        large={true}
        onClick={handleAllContentsDelete}
      />
    </div>
  );
};

export default DeleteAllButton;
