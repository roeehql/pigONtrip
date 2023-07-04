import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import { useAppDispatch } from "@data/store/store";
import { setToast } from "@data/store/toastSlice";
import { useHandleInput } from "@hooks/useHandleText";
import { useSubmit } from "@hooks/useSubmit";
import { useGetCurrency } from "./hooks/useGetCurrency";
import { FormContainerState } from "@@types/propsDataTypes";

import InputForm from "./InputForm";

const FormContainer = (data: FormContainerState) => {
  const dispatch = useAppDispatch();
  const [rating, setrating] = useState(5);
  const [exchangedMoney, setExchangedMoney] = useState(0);
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
  } = useHandleInput("식당");

  const exchangeRate = useGetCurrency({
    date: data.tripDate,
    code: data.currencyCode,
  });

  const typeCheckFn = () => {
    if (data.currencyCode === "KRW") {
      dispatch(
        setToast({ type: "warning", text: "여행중인 나라를 선택하세요!" })
      );
      return false;
    } else return true;
  };

  const afterSubmitFn = () => {
    setFood("");
    setFoodExpense("");
    setrating(5);
    setPlace("장소");
    data.setFirstPage();
  };
  const { onSubmit } = useSubmit({
    content: {
      id: uuidv4(),
      food,
      place,
      foodExpense,
      country: data.country,
      currencyCode: data.currencyCode,
      tripDate: data.tripDate,
      exchangedMoney,
      star: rating,
    },
    action: "write",
    typeCheckFn,
    afterSubmitFn,
  });

  const valueData = {
    food,
    place,
    rating,
    foodExpense,
    exchangedMoney,
    onSubmit,
    onPlaceChange,
    onFoodChange,
    onRating: (rate: number) => setrating(rate),
    onFoodExpenseChange,
  };

  useEffect(() => {
    setExchangedMoney(Math.round(exchangeRate * parseInt(foodExpense)));
  }, [exchangeRate, foodExpense]);

  return <InputForm data={valueData} changePage={data.setSecondPage} />;
};

export default FormContainer;
