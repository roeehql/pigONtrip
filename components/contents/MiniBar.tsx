import { ContentItemDataState } from "@@types/propsDataTypes";
import { FiMoreVertical } from "react-icons/fi";

const MiniBar = (viewData: ContentItemDataState) => {
  return (
    <div>
      <button
        type="button"
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
            type="button"
            className="flex flex-col justify-center items-center w-full h-1/2 rounded-t-lg border-2 border-x-0 border-t-0 border-b-black bg-transparent text-base cursor-pointer hover:bg-grey"
            onClick={viewData.openDeleteConfirm}
          >
            삭제
          </button>
          <button
            type="button"
            className="flex flex-col justify-center items-center w-full h-1/2 rounded-b-lg text-base cursor-pointer hover:bg-grey"
            onClick={viewData.openEditForm}
          >
            수정
          </button>
        </div>
      )}
    </div>
  );
};

export default MiniBar;
