import { useEffect, useState } from "react";

import { useHandleTextArea } from "@hooks/useHandleText";
import useHandleSelect from "@components/writeform/hooks/useHandleSelect";
import { useGetCurrency } from "@components/writeform/hooks/useGetCurrency";

import { EditDataState, ItemState } from "@@types/propsDataTypes";

import ItemEditFormView from "./ItemEditFormView";
import { useSubmit } from "@hooks/useSubmit";

const EditItem = ({ data, item }: { data: EditDataState; item: ItemState }) => {
  const [rating, setrating] = useState(item.star);
  const { value: editFood, onChange: onEditFoodChange } = useHandleTextArea(
    item.food
  );
  const { value: editPlace, onChange: onEditPlaceChange } = useHandleTextArea(
    item.place
  );
  const {
    value: editFoodExpense,
    setValue: setEditFoodExpense,
    onChange: onEditFoodExpenseChange,
  } = useHandleTextArea(item.foodExpense);

  const [editExchangedMoney, setEditExchangedMoney] = useState(
    item.exchangedMoney
  );

  const {
    country,
    currencyCode,
    tripDate,
    handleCountrySelect,
    handleDateClick,
  } = useHandleSelect(item.country, item.currencyCode);
  const exchangeRate = useGetCurrency({ date: tripDate, code: currencyCode });

  const checkExchangedMoneyType = () => {
    if (isNaN(editExchangedMoney)) {
      setEditFoodExpense("숫자로만 입력해주세요!");
      setTimeout(() => {
        setEditFoodExpense("0");
      }, 2000);
      return false;
    } else return true;
  };

  const { onSubmit } = useSubmit({
    content: {
      id: item.id,
      food: editFood,
      foodExpense: editFoodExpense,
      place: editPlace,
      country,
      currencyCode,
      tripDate,
      exchangedMoney: editExchangedMoney,
      star: rating,
    },
    action: "edit",
    typeCheckFn: checkExchangedMoneyType,
    afterSubmitFn: data.closeEditForm,
  });

  const editFormData = {
    viewData: {
      tripDate,
      editFood,
      editPlace,
      rating,
      country,
      editFoodExpense,
      editExchangedMoney,
    },
    onSubmit,
    handleDateClick,
    handleCountrySelect,
    onRating: (rate: number) => setrating(rate),
    onEditPlaceChange,
    onEditFoodChange,
    onEditFoodExpenseChange,
    ...data,
  };

  useEffect(() => {
    setEditExchangedMoney(Math.round(exchangeRate * parseInt(editFoodExpense)));
  }, [exchangeRate, editFoodExpense]);

  return <ItemEditFormView {...editFormData} />;
};

export default EditItem;
