import Button from "./Button";

const Confirm = ({
  text,
  positiveAnswer,
  handleConfirmClick,
  onCancelClick,
}: {
  text: string;
  positiveAnswer: string;
  handleConfirmClick: () => void;
  onCancelClick: () => void;
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="flex flex-col min-w-1/2 h-fit p-6 bg-white rounded shadow">
        <h1 className="w-full text-lg tracking-tight text-center mb-4">
          {text}
        </h1>
        <div>
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
