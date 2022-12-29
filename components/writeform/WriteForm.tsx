import useHandleSelect from "@hooks/useHandleSelect";
import SelectCountry from "./SelectCountry";
import styles from "@styles/components/writeForm/WriteForm.module.scss";
import Button from "@components/atomic/Button";
import SelectDate from "./SelectDate";
import Input from "@components/atomic/Input";
import useHandleInput from "@hooks/useHandleInput";

const WriteForm = () => {
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

  return (
    <div className={styles.writeForm_container}>
      <div className={styles.writeForm_select_country}>
        <SelectCountry onChange={handleCountryClick} />
        <Button text={"다음"} large={true} type={"button"} />
      </div>
      <div className={styles.writeForm_select_date}>
        <SelectDate onChange={handleDateClick} />
        <div className={styles.writeForm_button_inline}>
          <Button text={"이전"} large={true} type={"button"} />
          <Button text={"다음"} large={true} type={"button"} />
        </div>
      </div>
      <div className={styles.writeForm_input_food}>
        <Input
          type={"text"}
          labelText={"음식을 입력하세요."}
          name={"food"}
          value={food}
          onChange={onFoodChange}
          required={true}
        />
        <Input
          type={"text"}
          labelText={"금액을 입력하세요."}
          name={"foodExpense"}
          value={foodExpense}
          onChange={onFoodExpenseChange}
          required={true}
        />
        <div className={styles.writeForm_button_inline}>
          <Button text={"이전"} large={true} type={"button"} />
          <Button text={"입력"} large={true} type={"button"} />
        </div>
      </div>
    </div>
  );
};

export default WriteForm;
