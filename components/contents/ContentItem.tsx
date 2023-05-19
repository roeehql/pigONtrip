import { useState, MouseEvent } from "react";

import { useAppDispatch } from "@store/store";
import { removeItem, saveItem } from "@store/contentsSlice";

import { ItemState } from "@@types/propsDataTypes";
import ContentItemView from "./ContentItemView";
import EditItem from "./EditItem";

const ContentItem = ({ item }: { item: ItemState }) => {
  const dispatch = useAppDispatch();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [menuLocation, setMenuLocation] = useState({ x: 0, y: 0 });
  const [onEdit, setOnEdit] = useState(false);

  const handleDelete = (id: string) => {
    setDeleteConfirm(false);
    dispatch(removeItem(id));
    dispatch(saveItem());
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
