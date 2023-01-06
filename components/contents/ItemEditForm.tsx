import { FormEvent, useEffect, useState } from "react";

import { useGetCurrency } from "@hooks/useGetCurrency";
import useHandleInput from "@hooks/useHandleInput";
import useHandleSelect from "@hooks/useHandleSelect";
import { getToday } from "util/getToday";

import { useAppDispatch } from "@store/store";
import { editItem, saveItem } from "@store/contentsSlice";

import { ItemState } from "@@types/dataTypes";

import styles from "@styles/components/contents/ItemEditForm.module.scss";
import StarRate from "@components/writeform/StarRate";
import { FaArrowRight } from "react-icons/fa";
import { travelDestination } from "@components/writeform/data/travelDestination";

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

  return (
    <form className={styles.edit_form} onSubmit={onSubmit}>
      <div className={styles.flex_align_center}>
        <input
          type="date"
          name="trip_date"
          className={styles.edit_select}
          value={tripDate}
          onChange={handleDateClick}
          required
          max={getToday()}
        />
        <select className={styles.edit_select} onChange={handleCountrySelect}>
          <option>{content.country}</option>
          {travelDestination.map((item) => (
            <option key={item.index} value={[item.country, item.currencyCode]}>
              {item.country}
            </option>
          ))}
        </select>
        <StarRate
          count={5}
          rating={rating}
          color={{ filled: "#feca57", unfilled: "#e0e0e0" }}
          onRating={(rate) => setrating(rate)}
        />
      </div>
      <div className={styles.flex_align_center}>
        <input
          type="text"
          name="food"
          className={styles.edit_input}
          value={editFood}
          onChange={onEditFoodChange}
          required
        />
        <div>
          <input
            type="text"
            name="foodExpense"
            className={styles.edit_input}
            value={editFoodExpense}
            onChange={onEditFoodExpenseChange}
            required
          />
          <FaArrowRight />
          <input
            type="text"
            className={styles.edit_input}
            value={editExchangedMoney}
            readOnly
          />
        </div>
      </div>
      <div className={styles.flex_align_center}>
        <button className={styles.edit_button} type="submit">
          수정
        </button>
        <button className={styles.edit_button} onClick={onEditCancelClick}>
          취소
        </button>
      </div>
    </form>
  );
};

export default ItemEditForm;
