import { FormEvent, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import useHandleSelect from "@hooks/useHandleSelect";
import useHandleInput from "@hooks/useHandleInput";
import { useGetCurrency } from "@hooks/useGetCurrency";

import { useAppDispatch } from "@store/store";
import { addItem, ContentsSliceState, saveItem } from "@store/contentsSlice";

import { v4 as uuidv4 } from "uuid";
import { FaArrowDown } from "react-icons/fa";

const SelectCountry = dynamic(() => import("./SelectCountry"));
import Button from "@components/atomic/Button";
const SelectDate = dynamic(() => import("./SelectDate"));
import Input from "@components/atomic/Input";

import styles from "@styles/components/writeForm/WriteForm.module.scss";
import StarRate from "./StarRate";

const WriteForm = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [rating, setrating] = useState(0);
  const [exchangedMoney, setExchangedMoney] = useState(0);
  const {
    country,
    currencyCode,
    tripDate,
    handleCountryClick,
    handleDateClick,
  } = useHandleSelect("");
  const {
    value: food,
    onChange: onFoodChange,
    setValue: setFood,
  } = useHandleInput("");
  const {
    value: foodExpense,
    onChange: onFoodExpenseChange,
    setValue: setFoodExpense,
  } = useHandleInput("");

  const exchangeRate = useGetCurrency({ date: tripDate, code: currencyCode });

  const handlePage = (index: number) => {
    setPage(index);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content: ContentsSliceState = {
      id: uuidv4(),
      food,
      foodExpense,
      country,
      currencyCode,
      tripDate,
      exchangedMoney,
      star: rating,
    };
    dispatch(addItem(content));
    dispatch(saveItem());
    setFood("");
    setFoodExpense("");
    setPage(1);
  };

  useEffect(() => {
    setExchangedMoney(Math.round(exchangeRate * parseInt(foodExpense)));
  }, [exchangeRate, foodExpense]);

  return (
    <div className={styles.writeForm_container}>
      {page === 1 && (
        <div className={styles.writeForm_select_country}>
          <SelectCountry onChange={handleCountryClick} />
          <Button
            text={"다음"}
            large={true}
            type={"button"}
            onClick={() => handlePage(2)}
          />
        </div>
      )}
      {page === 2 && (
        <div className={styles.writeForm_select_date}>
          <SelectDate onChange={handleDateClick} />
          <div className={styles.writeForm_button_inline}>
            <Button
              text={"이전"}
              large={true}
              type={"button"}
              onClick={() => handlePage(1)}
            />
            <Button
              text={"다음"}
              large={true}
              type={"button"}
              onClick={() => handlePage(3)}
            />
          </div>
        </div>
      )}
      {page === 3 && (
        <form className={styles.writeForm_input_food} onSubmit={handleSubmit}>
          <Input
            labelText={""}
            placeholder={"음식 이름"}
            name={"food"}
            value={food}
            onChange={onFoodChange}
            required={true}
          />
          <div className={styles.flex_a_center}>
            <StarRate
              count={5}
              color={{ filled: "#feca57", unfilled: "#e0e0e0" }}
              rating={rating}
              onRating={(rate: number) => setrating(rate)}
            />
          </div>
          <div className={styles.flex_a_center}>
            <Input
              labelText={""}
              placeholder={"금액 ex) 500엔 -> 500"}
              name={"foodExpense"}
              value={foodExpense}
              onChange={onFoodExpenseChange}
              required={true}
            />
            <FaArrowDown />
            <input
              type="text"
              className={styles.writeForm_input}
              value={isNaN(exchangedMoney) ? "0원" : `${exchangedMoney}원`}
              readOnly
            />
          </div>
          <div className={styles.writeForm_button_inline}>
            <Button
              text={"이전"}
              large={true}
              type={"button"}
              onClick={() => handlePage(2)}
            />
            <Button text={"입력"} large={true} type={"submit"} />
          </div>
        </form>
      )}
    </div>
  );
};

export default WriteForm;
