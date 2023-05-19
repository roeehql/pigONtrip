import { ContentItemDataState, ItemState } from "@@types/propsDataTypes";
import Textarea from "@components/atomic/Textarea";
import { FaStar } from "react-icons/fa";
import { handleAmountComma } from "util/handleAmountComma";
import DeleteConfirm from "./DeleteConfirm";
import MiniBar from "./MiniBar";

const ContentItemView = ({
  item,
  viewData,
}: {
  item: ItemState;
  viewData: ContentItemDataState;
}) => {
  return (
    <div
      onContextMenu={viewData.handleContextMenu}
      onDoubleClick={viewData.handleDoubleClick}
      className="flex justify-center w-300 min-h-500 h-fit m-2 py-2 px-4 shadow bg-grey bg-opacity-10 border-2 border-solid border-grey"
    >
      {viewData.deleteConfirm ? (
        <DeleteConfirm {...viewData} />
      ) : (
        <>
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
          <MiniBar {...viewData} />
        </>
      )}
    </div>
  );
};

export default ContentItemView;
