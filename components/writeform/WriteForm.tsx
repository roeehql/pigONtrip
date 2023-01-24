import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import useHandleSelect from "@hooks/useHandleSelect";
import { useHandleInput } from "@hooks/useHandleInput";
import { useGetCurrency } from "@hooks/useGetCurrency";

import { useAppDispatch } from "@store/store";
import { addItem, ContentsSliceState, saveItem } from "@store/contentsSlice";

import WriteFormView from "./WriteFormView";

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
  const {
    value: place,
    onChange: onPlaceChange,
    setValue: setPlace,
  } = useHandleInput("");

  const exchangeRate = useGetCurrency({ date: tripDate, code: currencyCode });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (foodExpense.search("D")) {
      setFoodExpense("숫자로만 입력해주세요!");
      setTimeout(() => {
        setFoodExpense("0");
      }, 2000);
    } else {
      const content: ContentsSliceState = {
        id: uuidv4(),
        food,
        place,
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
      setrating(0);
      setPlace("");
      setPage(1);
    }
  };

  useEffect(() => {
    setExchangedMoney(Math.round(exchangeRate * parseInt(foodExpense)));
  }, [exchangeRate, foodExpense]);

  const writeFormViewData = {
    page,
    handleCountryClick,
    handleDateClick,
    onClickSetPage1: () => setPage(1),
    onClickSetPage2: () => setPage(2),
    onClickSetPage3: () => setPage(3),
    handleSubmit,
    food,
    place,
    onPlaceChange,
    onFoodChange,
    rating,
    onRating: (rate: number) => setrating(rate),
    foodExpense,
    onFoodExpenseChange,
    exchangedMoney,
  };
  return <WriteFormView data={writeFormViewData} />;
};

export default WriteForm;
