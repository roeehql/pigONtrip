import { ContentItemDataState, ItemState } from "@@types/dataTypes";
import Textarea from "@components/atomic/Textarea";
import { FaStar } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { handleAmountComma } from "util/handleAmountComma";

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
      className="flex justify-center w-300 h-fit m-2 py-2 px-4 shadow bg-grey bg-opacity-10 border-2 border-solid border-grey"
    >
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
      <div>
        <button
          className="flex flex-row justify-center items-center w-8 h-8 border-transparent rounded-full bg-transparent cursor-pointer hover:bg-grey"
          onClick={viewData.onClickVerticalMenu}
        >
          <FiMoreVertical />
        </button>
        {viewData.isActiveMenu && (
          <div
            className="absolute w-80 h-80 rounded-lg bg-white border-2 border-solid border-black"
            style={{
              left: viewData.menuLocation.x,
              top: viewData.menuLocation.y,
            }}
            onMouseLeave={viewData.handleLeaveVerticalMenu}
          >
            <button
              className="flex flex-col justify-center items-center w-full h-1/2 rounded-t-lg border-2 border-x-0 border-t-0 border-b-black bg-transparent text-base cursor-pointer hover:bg-grey"
              onClick={viewData.handleDelete}
            >
              삭제
            </button>
            <button
              className="flex flex-col justify-center items-center w-full h-1/2 rounded-b-lg text-base cursor-pointer hover:bg-grey"
              onClick={viewData.onEditClick}
            >
              수정
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentItemView;
