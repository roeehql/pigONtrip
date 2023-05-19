import { ContentItemDataState } from "@@types/propsDataTypes";
import Button from "@components/atomic/Button";

const DeleteConfirm = (viewData: ContentItemDataState) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-500 ">
      <h3 className="w-full mb-5 text-center">정말로 삭제하시겠습니까?</h3>
      <div className="flex justify-around">
        <Button
          text={"네"}
          large={false}
          type={"button"}
          onClick={viewData.handleDelete}
        />
        <Button
          text={"아니오"}
          large={false}
          type={"button"}
          onClick={viewData.cancelDelete}
        />
      </div>
    </div>
  );
};

export default DeleteConfirm;
