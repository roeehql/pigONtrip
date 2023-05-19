import StarRate from "@components/writeform/StarRate";
import { travelDestination } from "@components/writeform/data/travelDestination";
import { getToday } from "util/getToday";
import { EditFormDataState } from "@@types/propsDataTypes";
import Textarea from "@components/atomic/Textarea";
import FormButton from "../atomic/FormButton";

const ItemEditFormView = (editFormData: EditFormDataState) => {
  const { viewData } = editFormData;

  return (
    <form
      className="flex flex-col justify-start items-center w-300 h-fit m-2 py-2 px-4 shadow bg-grey bg-opacity-10 border-2 border-solid border-grey"
      onSubmit={editFormData.onSubmit}
    >
      <input
        type="date"
        name="trip_date"
        className="w-full px-3 py-1 border-solid border-2 border-grey mr-2 mb-4"
        value={viewData.tripDate}
        onChange={editFormData.handleDateClick}
        required
        min={"2022-01-01"}
        max={getToday()}
      />
      <select
        className="w-full px-3 py-1 border-solid border-2 border-grey mr-2 mb-4"
        onChange={editFormData.handleCountrySelect}
      >
        <option>{viewData.country}</option>
        {travelDestination.map((item) => (
          <option key={item.index} value={[item.country, item.currencyCode]}>
            {item.country}
          </option>
        ))}
      </select>
      <Textarea
        value={viewData.editPlace}
        onChange={editFormData.onEditPlaceChange}
        readOnly={false}
        labelText={""}
      />
      <Textarea
        value={viewData.editFood}
        onChange={editFormData.onEditFoodChange}
        readOnly={false}
        labelText={""}
      />
      <StarRate
        count={5}
        rating={viewData.rating}
        color={{ filled: "#feca57", unfilled: "#e0e0e0" }}
        onRating={editFormData.onRating}
      />
      <div className="flex flex-col justify-start items-center w-full pt-8 pb-8 mt-8 border-2 border-dotted border-x-0 border-b-0 border-t-grey">
        <Textarea
          value={viewData.editFoodExpense}
          onChange={editFormData.onEditFoodExpenseChange}
          readOnly={false}
          labelText={`${viewData.country}금액`}
        />
        <Textarea
          value={`${viewData.editExchangedMoney}`}
          readOnly={true}
          labelText={"한국금액"}
        />
      </div>
      <div className="flex justify-around items-center">
        <FormButton type="submit" text="수정" />
        <FormButton
          type="button"
          text="삭제"
          onClick={editFormData.onEditCancelClick}
        />
      </div>
    </form>
  );
};

export default ItemEditFormView;
