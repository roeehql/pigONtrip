import dynamic from "next/dynamic";

import Button from "@components/atomic/Button";
import Input from "@components/atomic/Input";

import { GiAirplaneDeparture } from "react-icons/gi";
import { WriteFormViewState } from "@@types/propsDataTypes";

const StarRate = dynamic(() => import("./StarRate"));
const SelectCountry = dynamic(() => import("./SelectCountry"));
const SelectDate = dynamic(() => import("./SelectDate"));

const WriteFormView = ({ data }: WriteFormViewState) => {
  return (
    <div className="flex flex-col justify-items-center w-full min-h-600 mb-5">
      {data.page === 1 && (
        <div className="flex flex-col justify-between items-center h-600 pt-80">
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
        <div className="flex flex-col justify-between items-center h-600 pt-80">
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
          className="flex flex-col justify-between items-center h-600 pt-80"
          onSubmit={data.handleSubmit}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <Input
              type="form"
              labelText={"장소는 어디인가요?"}
              name={"place"}
              value={data.place}
              onChange={data.onPlaceChange}
              required={true}
            />
            <Input
              type="form"
              labelText={"🍴음식이름을 입력하세요!"}
              name={"food"}
              value={data.food}
              onChange={data.onFoodChange}
              required={true}
            />
            <p>⭐별점을 기록하세요⭐</p>
            <StarRate
              count={5}
              color={{ filled: "#feca57", unfilled: "#e0e0e0" }}
              rating={data.rating}
              onRating={data.onRating}
            />
            <Input
              type="form"
              labelText={"금액을 입력하세요!"}
              placeholder={"ex) 500엔 -> 500"}
              name={"foodExpense"}
              value={data.foodExpense}
              onChange={data.onFoodExpenseChange}
              required={true}
            />
            <Input
              type="form"
              labelText={"환전된 금액을 확인하세요!"}
              name={"exchangedMoney"}
              value={
                isNaN(data.exchangedMoney) ? "0원" : `${data.exchangedMoney}원`
              }
              required={true}
              readOnly={true}
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
