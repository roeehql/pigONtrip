import { ChangeEvent } from "react";
import Button from "@components/atomic/Button";
import SelectDate from "./SelectDate";

const SelectDatePage = ({
  onPrevClick,
  onNextClick,
  handleDateClick,
}: {
  onPrevClick: () => void;
  onNextClick: () => void;
  handleDateClick: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col justify-between items-center h-600 pt-80">
      <SelectDate onChange={handleDateClick} />
      <div className="flex flex-row">
        <Button
          text={"이전"}
          large={true}
          type={"button"}
          onClick={onPrevClick}
        />
        <Button
          text={"다음"}
          large={true}
          color="red"
          type={"button"}
          onClick={onNextClick}
        />
      </div>
    </div>
  );
};

export default SelectDatePage;
