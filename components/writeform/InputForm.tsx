import { InputFormState } from "@@types/propsDataTypes";
import Button from "@components/atomic/Button";
import Input from "@components/atomic/Input";
import StarRate from "./StarRate";

const InputForm = ({
  data,
  changePage,
}: {
  data: InputFormState;
  changePage: () => void;
}) => {
  return (
    <form
      className="flex flex-col justify-between items-center h-600 pt-80"
      onSubmit={data.onSubmit}
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
          type="number"
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
          onClick={changePage}
        />
        <Button text={"입력"} color="red" large={true} type={"submit"} />
      </div>
    </form>
  );
};

export default InputForm;
