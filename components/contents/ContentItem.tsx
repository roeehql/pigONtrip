import { useState } from "react";
import dynamic from "next/dynamic";

import { useAppDispatch } from "@store/store";
import { removeItem, saveItem } from "@store/contentsSlice";

import { ItemState } from "@@types/dataTypes";
import ContentItemView from "./ContentItemView";

const ItemEditForm = dynamic(() => import("./ItemEditForm"));

const ContentItem = ({ item }: { item: ItemState }) => {
  const [active, setActive] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeItem(id));
    dispatch(saveItem());
  };

  const onEditClick = () => {
    setOnEdit(true);
    setActive(false);
  };

  const contentItemViewData = {
    onClickVerticalMenu: () => setActive(true),
    active,
    onEditClick,
    handleLeaveVerticalMenu: () => setActive(false),
    handleDelete: () => handleDelete(item.id),
  };
  return (
    <>
      {onEdit ? (
        <ItemEditForm
          content={item}
          onEditCancelClick={() => setOnEdit(false)}
        />
      ) : (
        <ContentItemView item={item} data={contentItemViewData} />
      )}
    </>
  );
};

export default ContentItem;
