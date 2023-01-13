import dynamic from "next/dynamic";

import Button from "@components/atomic/Button";
import Input from "@components/atomic/Input";

import { FaArrowDown } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import { WriteFormViewState } from "@@types/dataTypes";

const StarRate = dynamic(() => import("./StarRate"));
const SelectCountry = dynamic(() => import("./SelectCountry"));
const SelectDate = dynamic(() => import("./SelectDate"));

const WriteFormView = ({ data }: WriteFormViewState) => {
  return (
    <div className="flex flex-col justify-items-center w-full h-600 mt-120 mb-5">
      {data.page === 1 && (
        <div className="flex flex-col justify-between items-center h-500">
          <SelectCountry onChange={data.handleCountryClick} />
          <div className="flex flex-row">
            <button className="min-w-fit min-h-fit px-8 py-3 m-6 text-4xl">
              <GiAirplaneDeparture />
            </button>
            <Button
              text={"다음"}
              large={true}
              color="red"
              type={"button"}
              onClick={data.onClickSetPage2}
            />
          </div>
        </div>
      )}
      {data.page === 2 && (
        <div className="flex flex-col justify-between items-center h-500">
          <SelectDate onChange={data.handleDateClick} />
          <div className="flex flex-row">
            <Button
              text={"이전"}
              large={true}
              type={"button"}
              onClick={data.onClickSetPage1}
            />
            <Button
              text={"다음"}
              large={true}
              color="red"
              type={"button"}
              onClick={data.onClickSetPage3}
            />
          </div>
        </div>
      )}
      {data.page === 3 && (
        <form
          className="flex flex-col justify-between items-center h-500"
          onSubmit={data.handleSubmit}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <Input
              labelText={""}
              placeholder={"음식 이름"}
              name={"food"}
              value={data.food}
              onChange={data.onFoodChange}
              required={true}
            />
            <StarRate
              count={5}
              color={{ filled: "#feca57", unfilled: "#e0e0e0" }}
              rating={data.rating}
              onRating={data.onRating}
            />
            <Input
              labelText={""}
              placeholder={"금액 ex) 500엔 -> 500"}
              name={"foodExpense"}
              value={data.foodExpense}
              onChange={data.onFoodExpenseChange}
              required={true}
            />
            <FaArrowDown />
            <input
              type="text"
              className="px-4 py-1 m-3 outline-red-light rounded-lg border-2 border-solid border-yellow"
              value={
                isNaN(data.exchangedMoney) ? "0원" : `${data.exchangedMoney}원`
              }
              readOnly
            />
          </div>
          <div className="flex flex-row">
            <Button
              text={"이전"}
              large={true}
              type={"button"}
              onClick={data.onClickSetPage2}
            />
            <Button text={"입력"} color="red" large={true} type={"submit"} />
          </div>
        </form>
      )}
    </div>
  );
};

export default WriteFormView;
