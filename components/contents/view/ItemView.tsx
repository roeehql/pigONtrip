import { ContentsSliceState } from "@data/store/contentsSlice";
import { handleAmountComma } from "util/handleAmountComma";
import Textarea from "@components/atomic/Textarea";
import { FaStar } from "react-icons/fa";

const itemView = ({ item }: { item: ContentsSliceState }) => {
  return (
    <div className="flex flex-col w-300 py-1 font-sans text-base">
      <small className="w-full px-4 text-red">{item.tripDate}</small>
      <p className="w-full text-left pl-5 pt-4">{item.country}</p>
      <Textarea value={item.place} readOnly={true} labelText={""} />
      <Textarea value={item.food} readOnly={true} labelText={""} />
      <span className="flex w-full p-4">
        {Array(item.star)
          .fill(0)
          .map((item, index) => (
            <FaStar key={index} style={{ color: "#feca57" }} />
          ))}
      </span>
      <div className="flex flex-col justify-start items-center w-full pt-8 pb-8 mt-8 border-2 border-dotted border-x-0 border-b-0 border-t-grey">
        <Textarea
          value={`${item.foodExpense} ${item.currencyCode}`}
          readOnly={true}
          labelText={`${item.country}금액`}
        />
        <Textarea
          value={`${handleAmountComma(item.exchangedMoney)} 원`}
          readOnly={true}
          labelText={`한국금액`}
        />
      </div>
    </div>
  );
};

export default itemView;
