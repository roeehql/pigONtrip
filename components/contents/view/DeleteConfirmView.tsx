import Button from "@components/atomic/Button";

const DeleteConfirm = ({
  handleDelete,
  cancelDelete,
}: {
  handleDelete: () => void;
  cancelDelete: () => void;
}) => {
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      className="flex flex-col justify-center items-center w-full h-500 "
    >
      <h3 className="w-full mb-5 text-center">정말로 삭제하시겠습니까?</h3>
      <div className="flex justify-around">
        <Button
          text={"네"}
          ariaLabel="삭제 하기"
          large={false}
          type={"button"}
          onClick={handleDelete}
        />
        <Button
          text={"아니오"}
          ariaLabel="삭제 안 하기"
          large={false}
          type={"button"}
          onClick={cancelDelete}
        />
      </div>
    </div>
  );
};

export default DeleteConfirm;
