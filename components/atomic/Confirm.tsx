import Button from "./Button";

const Confirm = ({
  text,
  positiveAnswer,
  handleConfirmClick,
  onCancelClick,
  style,
}: {
  text: string;
  positiveAnswer: string;
  handleConfirmClick: () => void;
  onCancelClick: () => void;
  style?: "list";
}) => {
  return (
    <div className="absolute inset-x-0 top-80 flex justify-center items-start z-50">
      <div
        className={
          style === "list"
            ? "flex justify-start items-center px-4 bg-white"
            : "flex flex-col min-w-1/2 h-fit p-6 bg-white rounded shadow"
        }
      >
        <h1 className="w-full text-lg tracking-tight text-center mb-4">
          {text}
        </h1>
        <div className="flex justify-center items-center">
          <Button
            type="button"
            text={positiveAnswer}
            onClick={handleConfirmClick}
            large={false}
          />
          <Button
            type="button"
            text="취소"
            large={false}
            onClick={onCancelClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
