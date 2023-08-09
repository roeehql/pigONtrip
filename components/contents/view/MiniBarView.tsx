import { MouseEvent } from "react";
import { FiMoreVertical } from "react-icons/fi";

const MiniBar = ({
  onClickVerticalMenu,
  isActiveMenu,
  menuLocation,
  handleLeaveVerticalMenu,
  openDeleteConfirm,
  openEditForm,
}: {
  onClickVerticalMenu: (event: MouseEvent<HTMLButtonElement>) => void;
  isActiveMenu: boolean;
  menuLocation: { x: number; y: number };
  handleLeaveVerticalMenu: () => void;
  openDeleteConfirm: () => void;
  openEditForm: () => void;
}) => {
  return (
    <div>
      <button
        type="button"
        aria-label="수정과 삭제를 선택할 수 있는 메뉴 열기"
        className="flex flex-row justify-center items-center w-8 h-8 border-transparent rounded-full bg-transparent cursor-pointer hover:bg-grey"
        onClick={onClickVerticalMenu}
      >
        <FiMoreVertical />
      </button>
      {isActiveMenu && (
        <div
          role="menu"
          className="absolute w-80 h-80 rounded-lg bg-white border-2 border-solid border-black"
          style={{
            left: menuLocation.x,
            top: menuLocation.y,
          }}
          onMouseLeave={handleLeaveVerticalMenu}
        >
          <button
            type="button"
            aria-label="삭제하기"
            className="flex flex-col justify-center items-center w-full h-1/2 rounded-t-lg border-2 border-x-0 border-t-0 border-b-black bg-transparent text-base cursor-pointer hover:bg-grey"
            onClick={openDeleteConfirm}
          >
            삭제
          </button>
          <button
            type="button"
            aria-label="수정하기"
            className="flex flex-col justify-center items-center w-full h-1/2 rounded-b-lg text-base cursor-pointer hover:bg-grey"
            onClick={openEditForm}
          >
            수정
          </button>
        </div>
      )}
    </div>
  );
};

export default MiniBar;
