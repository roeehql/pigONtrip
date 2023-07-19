import { OnChangeState } from "@@types/WriteTypes";
import { getToday, getYesterDay } from "util/getToday";

const SelectDate = ({ onChange }: OnChangeState) => {
  return (
    <div className="flex flex-col h-full justify-center">
      <label
        className={`flex justify-center items-center h-fit m-2 px-4 py-2 border-2 border-sky-blue rounded-xl cursor-pointer hover:bg-sky-blue`}
      >
        <input
          type="radio"
          name="date"
          id="yesterday"
          onChange={onChange}
          value={getYesterDay()}
        />
        <h4 className="py-1 px-3 font-medium text-lg rounded-xl">
          어제 ( {getYesterDay()} )
        </h4>
      </label>
      <label
        className={`flex justify-center items-center h-fit m-2 px-4 py-2 rounded-xl border-2 border-sky-blue cursor-pointer hover:bg-sky-blue`}
      >
        <input
          type="radio"
          name="date"
          id="today"
          onChange={onChange}
          value={getToday()}
          checked
        />
        <h4 className="py-1 px-3 font-medium text-lg rounded-xl">
          오늘 ( {getToday()} )
        </h4>
      </label>
    </div>
  );
};

export default SelectDate;
