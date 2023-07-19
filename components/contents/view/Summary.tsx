import { useState } from "react";
import { ContentsSliceState } from "@data/store/contentsSlice";
import ContentItem from "../ContentItem";

const Summary = ({ item }: { item: ContentsSliceState }) => {
  const [openDetail, setOpenDetail] = useState(false);
  return (
    <>
      <h4
        className="flex justify-center px-2 py-3 mb-1 w-full border-b-2 border-b-grey bg-white rounded-sm cursor-pointer hover:bg-grey"
        onClick={() => setOpenDetail(!openDetail)}
      >
        {item.food.length > 6 ? `${item.food.slice(0, 7)}...` : item.food} :{" "}
        {item.foodExpense}
        {item.currencyCode} = {Math.floor(item.exchangedMoney / 100) * 100}원
      </h4>
      {openDetail && <ContentItem item={item} />}
    </>
  );
};

export default Summary;
