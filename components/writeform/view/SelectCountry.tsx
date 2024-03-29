import { ChangeEvent, KeyboardEvent } from "react";
import { travelDestination } from "@data/jsonData/travelDestination";

const SelectCountry = ({
  onChange,
  country,
  handleOnEnter,
}: {
  handleOnEnter: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  country: string;
}) => {
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleOnEnter();
  };

  return (
    <div className="grid grid-cols-22 h-full justify-center">
      {travelDestination.map((item) => (
        <label
          key={item.index}
          className={`flex justify-center items-center w-150 h-fit rounded-lg p-2 m-1 ${
            item.country == country ? "bg-red-light" : "bg-logo"
          } cursor-pointer hover:bg-red-light`}
        >
          <input
            type="radio"
            name="country"
            id={item.country}
            className="mr-4 cursor-pointer"
            checked={item.country == country}
            onKeyUp={(e) => handleEnter(e)}
            onChange={onChange}
            value={[item.country, item.currencyCode]}
          />
          <h4 className="py-1 px-3 text-base font-medium rounded-lg bg-white text-black">
            {item.country}
          </h4>
        </label>
      ))}
    </div>
  );
};

export default SelectCountry;
