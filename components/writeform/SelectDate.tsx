import { getToday, getYesterDay } from "util/getToday";
import { OnChangeState } from "@@types/dataTypes";

const SelectDate = ({ onChange }: OnChangeState) => {
  return (
    <div className="flex flex-col h-full justify-center">
      <label
        className={
          "flex justify-center items-center h-fit m-2 px-4 py-2 rounded-xl bg-grey cursor-pointer hover:bg-sky-blue"
        }
      >
        <input
          type="radio"
          name="date"
          id="yesterday"
          className="mr-4 cursor-pointer"
          onChange={onChange}
          value={getYesterDay()}
        />
        <h4 className="py-1 px-3 font-medium text-base rounded-xl bg-white">
          어제 ( {getYesterDay()} )
        </h4>
      </label>
      <label
        className={
          "flex justify-center items-center h-fit m-2 px-4 py-2 rounded-xl bg-navy cursor-pointer hover:bg-sky-blue"
        }
      >
        <input
          type="radio"
          name="date"
          id="today"
          className="mr-4 cursor-pointer"
          onChange={onChange}
          value={getToday()}
          checked
        />
        <h4 className="py-1 px-3 font-medium text-base rounded-xl bg-white">
          오늘 ( {getToday()} )
        </h4>
      </label>
    </div>
  );
};

export default SelectDate;
