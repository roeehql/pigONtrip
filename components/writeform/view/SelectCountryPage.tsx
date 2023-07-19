import { ChangeEvent } from "react";
import Button from "@components/atomic/Button";
import SelectCountry from "./SelectCountry";
import { FaMap } from "react-icons/fa";

const SelectCountryPage = ({
  onNextClick,
  country,
  handleCountryClick,
}: {
  onNextClick: () => void;
  country: string;
  handleCountryClick: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col justify-between items-center h-600 pt-80">
      <SelectCountry onChange={handleCountryClick} country={country} />
      <div className="flex flex-row">
        <div className="min-w-fit min-h-fit px-8 py-3 m-6 text-4xl">
          <FaMap />
        </div>
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

export default SelectCountryPage;
