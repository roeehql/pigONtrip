import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import { useGetCurrency } from "@hooks/useGetCurrency";
import { useHandleInput } from "@hooks/useHandleText";
import { useSubmit } from "@hooks/useSubmit";

import { FormContainerState } from "@@types/propsDataTypes";

import Alert from "@components/atomic/Alert";
import InputForm from "./InputForm";

const FormContainer = (data: FormContainerState) => {
  const [rating, setrating] = useState(0);
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
  } = useHandleInput("");

  const exchangeRate = useGetCurrency({
    date: data.tripDate,
    code: data.currencyCode,
  });

  const typeCheckFn = () => {
    if (data.currencyCode === "KRW") {
      return (
        <Alert title="잠시만요!" message="여행 중인 나라를 선택해주세요!" />
      );
    } else return true;
  };

  const afterSubmitFn = () => {
    setFood("");
    setFoodExpense("");
    setrating(0);
    setPlace("");
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
