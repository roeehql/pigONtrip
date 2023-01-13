import { FormEvent, useEffect, useState } from "react";

import { useGetCurrency } from "@hooks/useGetCurrency";
import useHandleInput from "@hooks/useHandleInput";
import useHandleSelect from "@hooks/useHandleSelect";

import { useAppDispatch } from "@store/store";
import { editItem, saveItem } from "@store/contentsSlice";

import { ItemState } from "@@types/dataTypes";
import ItemEditFormView from "./ItemEditFormView";

const ItemEditForm = ({
  content,
  onEditCancelClick,
}: {
  content: ItemState;
  onEditCancelClick: () => void;
}) => {
  const dispatch = useAppDispatch();
  const [rating, setrating] = useState(content.star);
  const { value: editFood, onChange: onEditFoodChange } = useHandleInput(
    content.food
  );
  const { value: editFoodExpense, onChange: onEditFoodExpenseChange } =
    useHandleInput(content.foodExpense);
  const [editExchangedMoney, setEditExchangedMoney] = useState(
    content.exchangedMoney
  );

  const {
    country,
    currencyCode,
    tripDate,
    handleCountrySelect,
    handleDateClick,
  } = useHandleSelect(content.country, content.currencyCode);
  const exchangeRate = useGetCurrency({ date: tripDate, code: currencyCode });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      editItem({
        id: content.id,
        food: editFood,
        foodExpense: editFoodExpense,
        country,
        currencyCode,
        tripDate,
        exchangedMoney: editExchangedMoney,
        star: rating,
      })
    );
    dispatch(saveItem());
    onEditCancelClick();
  };

  useEffect(() => {
    setEditExchangedMoney(Math.round(exchangeRate * parseInt(editFoodExpense)));
  }, [exchangeRate, editFoodExpense]);

  const itemEditFormViewData = {
    onSubmit,
    tripDate,
    handleDateClick,
    handleCountrySelect,
    country: content.country,
    rating,
    onRating: (rate: number) => setrating(rate),
    editFood,
    onEditFoodChange,
    editFoodExpense,
    onEditFoodExpenseChange,
    editExchangedMoney,
    onEditCancelClick,
  };
  return <ItemEditFormView data={itemEditFormViewData} />;
};

export default ItemEditForm;
