import { ContentItemDataState } from "@@types/dataTypes";
import { FaStar } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { handleAmountComma } from "util/handleAmountComma";

const ContentItemView = ({ item, data }: ContentItemDataState) => {
  return (
    <div className="flex justify-around w-full h-fit m-2 py-2 px-4 border-solid border-grey">
      <div className="py-1 px-4 font-sans text-base">
        <div>
          <small className="pl-4 text-red">{item.tripDate}</small>
          <span className="pl-4">{item.country}</span>
        </div>
        <div className="flex">
          <span className="pl-4">{item.food}</span>{" "}
          <span className="flex pl-4">
            {Array(item.star)
              .fill(0)
              .map((item, index) => (
                <FaStar key={index} style={{ color: "#feca57" }} />
              ))}
          </span>
        </div>
        <div>
          <span className="pl-4">
            {item.foodExpense} {item.currencyCode}
          </span>{" "}
          ➡️
          <span className="pl-4">
            {handleAmountComma(item.exchangedMoney)} 원
          </span>
        </div>
      </div>
      <div>
        <button
          className="flex flex-row justify-center items-center w-8 h-8 border-transparent rounded-full bg-transparent cursor-pointer hover:bg-grey"
          onClick={data.onClickVerticalMenu}
        >
          <FiMoreVertical />
        </button>
        {data.active && (
          <div
            className="absolute w-80 h-80 rounded-lg bg-white border-2 border-solid border-black"
            onMouseLeave={data.handleLeaveVerticalMenu}
          >
            <button
              className="flex flex-col justify-center items-center w-full h-1/2 rounded-t-lg border-2 border-x-0 border-t-0 border-b-black bg-transparent text-base cursor-pointer hover:bg-grey"
              onClick={data.handleDelete}
            >
              삭제
            </button>
            <button
              className="flex flex-col justify-center items-center w-full h-1/2 rounded-b-lg text-base cursor-pointer hover:bg-grey"
              onClick={data.onEditClick}
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
