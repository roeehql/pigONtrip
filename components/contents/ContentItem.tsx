import { useState, MouseEvent } from "react";

import { setToast } from "@data/store/toastSlice";
import { useDispatch } from "react-redux";
import {
  ContentsSliceState,
  removeItem,
  setItem,
} from "@data/store/contentsSlice";

import ContentItemView from "./view/ContentItemView";
import EditItem from "./EditItem";

const ContentItem = ({ item }: { item: ContentsSliceState }) => {
  const dispatch = useDispatch();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [menuLocation, setMenuLocation] = useState({ x: 0, y: 0 });
  const [onEdit, setOnEdit] = useState(false);

  const handleDelete = (id: string) => {
    setDeleteConfirm(false);
    dispatch(removeItem(id));
    dispatch(setItem());
    dispatch(setToast({ type: "success", text: "삭제되었습니다." }));
  };

  const openEditForm = () => {
    setOnEdit(true);
    setIsActiveMenu(false);
  };

  const onClickVerticalMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setMenuLocation({ x: event.clientX, y: event.pageY });
    setIsActiveMenu(true);
  };

  const openDeleteConfirm = () => {
    setDeleteConfirm(true);
    setIsActiveMenu(false);
  };

  const handleContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setMenuLocation({ x: event.clientX, y: event.pageY });
    setIsActiveMenu(true);
  };

  const contentItemViewData = {
    onClickVerticalMenu,
    isActiveMenu,
    menuLocation,
    openEditForm,
    handleLeaveVerticalMenu: () => setIsActiveMenu(false),
    openDeleteConfirm,
    deleteConfirm,
    cancelDelete: () => setDeleteConfirm(false),
    handleDelete: () => handleDelete(item.id),
    handleContextMenu,
    handleDoubleClick: () => setOnEdit(true),
  };

  return (
    <>
      {onEdit ? (
        <EditItem
          data={{
            closeEditForm: () => setOnEdit(false),
            onEditCancelClick: () => setOnEdit(false),
          }}
          item={item}
        />
      ) : (
        <ContentItemView item={item} viewData={contentItemViewData} />
      )}
    </>
  );
};

export default ContentItem;
