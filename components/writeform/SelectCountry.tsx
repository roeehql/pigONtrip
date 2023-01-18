import { travelDestination } from "./data/travelDestination";
import { OnChangeState } from "@@types/dataTypes";

const SelectCountry = ({ onChange }: OnChangeState) => {
  return (
    <div className="grid grid-cols-22 h-full justify-center">
      {travelDestination.map((item) => (
        <label
          key={item.index}
          className="flex justify-center items-center w-150 h-fit rounded-lg p-2 m-1 bg-grey cursor-pointer hover:bg-sky-blue"
        >
          <input
            type="radio"
            name="country"
            id={item.country}
            className="mr-4 cursor-pointer"
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
