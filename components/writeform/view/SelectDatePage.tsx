import { ChangeEvent } from "react";
import Button from "@components/atomic/Button";
import SelectDate from "./SelectDate";

const SelectDatePage = ({
  onPrevClick,
  onNextClick,
  handleOnEnter,
  handleDateClick,
}: {
  onPrevClick: () => void;
  onNextClick: () => void;
  handleOnEnter: () => void;
  handleDateClick: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col justify-between items-center h-600 pt-80">
      <SelectDate onChange={handleDateClick} handleOnEnter={handleOnEnter} />
      <div className="flex flex-row">
        <Button
          text={"이전"}
          ariaLabel="나라 선택으로 돌아가기"
          large={true}
          type={"button"}
          onClick={onPrevClick}
        />
        <Button
          text={"다음"}
          ariaLabel="음식과 금액, 장소와 별점 입력 화면으로 이동하기"
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
