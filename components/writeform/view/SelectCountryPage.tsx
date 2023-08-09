import { KeyboardEvent, ChangeEvent } from "react";
import Button from "@components/atomic/Button";
import SelectCountry from "./SelectCountry";
import { FaMap } from "react-icons/fa";

const SelectCountryPage = ({
  onNextClick,
  country,
  handleCountryClick,
  handleOnEnter,
}: {
  onNextClick: () => void;
  country: string;
  handleOnEnter: () => void;
  handleCountryClick: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col justify-between items-center h-600 pt-80">
      <SelectCountry
        onChange={handleCountryClick}
        handleOnEnter={handleOnEnter}
        country={country}
      />
      <div className="flex flex-row">
        <div className="min-w-fit min-h-fit px-8 py-3 m-6 text-4xl">
          <FaMap />
        </div>
        <Button
          text={"다음"}
          ariaLabel="날짜 선택으로 이동하기"
          large={true}
          color="red"
          type={"button"}
          onClick={onNextClick}
        />
      </div>
    </div>
  );
};

export default SelectCountryPage;
