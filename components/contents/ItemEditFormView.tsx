import StarRate from "@components/writeform/StarRate";
import { travelDestination } from "@components/writeform/data/travelDestination";
import { FaArrowDown } from "react-icons/fa";
import { getToday } from "util/getToday";
import { ItemEditFormViewState } from "@@types/dataTypes";

const ItemEditFormView = ({ data }: ItemEditFormViewState) => {
  return (
    <form
      className="flex flex-col justify-center items-center w-full px-4 py-2"
      onSubmit={data.onSubmit}
    >
      <div className="flex flex-wrap justify-start items-center">
        <input
          type="date"
          name="trip_date"
          className="px-3 py-1 border-solid border-2 border-grey mr-2 mb-4"
          value={data.tripDate}
          onChange={data.handleDateClick}
          required
          max={getToday()}
        />
        <select
          className="px-3 py-1 border-solid border-2 border-grey mr-2 mb-4"
          onChange={data.handleCountrySelect}
        >
          <option>{data.country}</option>
          {travelDestination.map((item) => (
            <option key={item.index} value={[item.country, item.currencyCode]}>
              {item.country}
            </option>
          ))}
        </select>
        <StarRate
          count={5}
          rating={data.rating}
          color={{ filled: "#feca57", unfilled: "#e0e0e0" }}
          onRating={data.onRating}
        />
      </div>
      <div className="flex flex-wrap justify-start items-center">
        <input
          type="text"
          name="food"
          className="outline-none py-1 px-3 mb-4 text-base border-2 border-x-0 border-t-0 border-b-grey"
          value={data.editFood}
          onChange={data.onEditFoodChange}
          required
        />
        <div className="flex flex-col items-center">
          <input
            type="text"
            name="foodExpense"
            className="outline-none py-1 px-3 mb-4 text-base border-2 border-x-0 border-t-0 border-b-grey"
            value={data.editFoodExpense}
            onChange={data.onEditFoodExpenseChange}
            required
          />
          <FaArrowDown />
          <input
            type="text"
            className="outline-none py-1 px-3 mb-4 text-base border-2 border-x-0 border-t-0 border-b-grey"
            value={data.editExchangedMoney}
            readOnly
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-start items-center">
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
