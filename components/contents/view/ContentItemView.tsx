import DeleteConfirm from "./DeleteConfirmView";
import MiniBar from "./MiniBarView";

import { ContentItemDataState } from "@@types/ContentsTypes";
import ItemView from "./ItemView";
import { ContentsSliceState } from "@data/store/contentsSlice";

const ContentItemView = ({
  item,
  viewData,
}: {
  item: ContentsSliceState;
  viewData: ContentItemDataState;
}) => {
  return (
    <div
      onContextMenu={viewData.handleContextMenu}
      onDoubleClick={viewData.handleDoubleClick}
      className="flex justify-center w-300 min-h-500 h-fit m-2 py-2 px-4 shadow bg-grey bg-opacity-10 border-2 border-solid border-grey"
    >
      {viewData.deleteConfirm ? (
        <DeleteConfirm
          handleDelete={viewData.handleDelete}
          cancelDelete={viewData.cancelDelete}
        />
      ) : (
        <>
          <ItemView item={item} />
          <MiniBar
            onClickVerticalMenu={viewData.onClickVerticalMenu}
            isActiveMenu={viewData.isActiveMenu}
            menuLocation={viewData.menuLocation}
            handleLeaveVerticalMenu={viewData.handleLeaveVerticalMenu}
            openDeleteConfirm={viewData.openDeleteConfirm}
            openEditForm={viewData.openEditForm}
          />
        </>
      )}
    </div>
  );
};

export default ContentItemView;
