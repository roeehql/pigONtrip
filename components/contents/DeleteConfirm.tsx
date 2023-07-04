import Button from "@components/atomic/Button";

const DeleteConfirm = ({
  handleDelete,
  cancelDelete,
}: {
  handleDelete: () => void;
  cancelDelete: () => void;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-500 ">
      <h3 className="w-full mb-5 text-center">정말로 삭제하시겠습니까?</h3>
      <div className="flex justify-around">
        <Button
          text={"네"}
          large={false}
          type={"button"}
          onClick={handleDelete}
        />
        <Button
          text={"아니오"}
          large={false}
          type={"button"}
          onClick={cancelDelete}
        />
      </div>
    </div>
  );
};

export default DeleteConfirm;
