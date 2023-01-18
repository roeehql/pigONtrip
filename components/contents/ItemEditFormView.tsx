import StarRate from "@components/writeform/StarRate";
import { travelDestination } from "@components/writeform/data/travelDestination";
import { FaArrowDown } from "react-icons/fa";
import { getToday } from "util/getToday";
import { EditFormDataState } from "@@types/dataTypes";
import Textarea from "@components/atomic/Textarea";

const ItemEditFormView = ({ data }: { data: EditFormDataState }) => {
  return (
    <form
      className="flex flex-col justify-start items-center w-300 h-fit m-2 py-2 px-4 shadow bg-grey bg-opacity-10 border-2 border-solid border-grey"
      onSubmit={data.onSubmit}
    >
      <input
        type="date"
        name="trip_date"
        className="w-full px-3 py-1 border-solid border-2 border-grey mr-2 mb-4"
        value={data.tripDate}
        onChange={data.handleDateClick}
        required
        min={"2022-01-01"}
        max={getToday()}
      />
      <select
        className="w-full px-3 py-1 border-solid border-2 border-grey mr-2 mb-4"
        onChange={data.handleCountrySelect}
      >
        <option>{data.country}</option>
        {travelDestination.map((item) => (
          <option key={item.index} value={[item.country, item.currencyCode]}>
            {item.country}
          </option>
        ))}
      </select>
      <Textarea
        value={data.editFood}
        onChange={data.onEditFoodChange}
        readOnly={false}
        labelText={""}
      />
      <StarRate
        count={5}
        rating={data.rating}
        color={{ filled: "#feca57", unfilled: "#e0e0e0" }}
        onRating={data.onRating}
      />
      <div className="flex flex-col justify-start items-center w-full pt-8 pb-8 mt-8 border-2 border-dotted border-x-0 border-b-0 border-t-grey">
        <Textarea
          value={data.editFoodExpense}
          onChange={data.onEditFoodExpenseChange}
          readOnly={false}
          labelText={`${data.country}금액`}
        />
        <Textarea
          value={`${data.editExchangedMoney}`}
          readOnly={true}
          labelText={"한국금액"}
        />
      </div>
      <div className="flex justify-around items-center">
        <button
          className="outline-none py-2 px-4 m-1 border-none rounded-xl bg-navy text-white cursor-pointer hover:bg-sky-blue"
          type="submit"
        >
          수정
        </button>
        <button
          className="outline-none py-2 px-4 m-1 border-none rounded-xl bg-navy text-white cursor-pointer hover:bg-sky-blue"
          onClick={data.onEditCancelClick}
        >
          취소
        </button>
      </div>
    </form>
  );
};

export default ItemEditFormView;
