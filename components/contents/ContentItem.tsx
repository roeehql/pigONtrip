import { useState, MouseEvent, FormEvent, useEffect } from "react";

import { useAppDispatch } from "@store/store";
import { editItem, removeItem, saveItem } from "@store/contentsSlice";

import { ItemState } from "@@types/propsDataTypes";
import ContentItemView from "./ContentItemView";
import { useHandleTextArea } from "@hooks/useHandleInput";
import useHandleSelect from "@hooks/useHandleSelect";
import { useGetCurrency } from "@hooks/useGetCurrency";
import ItemEditFormView from "./ItemEditFormView";

const ContentItem = ({ item }: { item: ItemState }) => {
  const dispatch = useAppDispatch();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [menuLocation, setMenuLocation] = useState({ x: 0, y: 0 });
  const [onEdit, setOnEdit] = useState(false);
  const [rating, setrating] = useState(item.star);
  const { value: editFood, onChange: onEditFoodChange } = useHandleTextArea(
    item.food
  );
  const { value: editPlace, onChange: onEditPlaceChange } = useHandleTextArea(
    item.place
  );
  const {
    value: editFoodExpense,
    setValue: setEditFoodExpense,
    onChange: onEditFoodExpenseChange,
  } = useHandleTextArea(item.foodExpense);
  const [editExchangedMoney, setEditExchangedMoney] = useState(
    item.exchangedMoney
  );

  const {
    country,
    currencyCode,
    tripDate,
    handleCountrySelect,
    handleDateClick,
  } = useHandleSelect(item.country, item.currencyCode);
  const exchangeRate = useGetCurrency({ date: tripDate, code: currencyCode });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editFoodExpense.search("D")) {
      setEditFoodExpense("숫자로만 입력해주세요!");
      setTimeout(() => {
        setEditFoodExpense("0");
      }, 2000);
    } else {
      dispatch(
        editItem({
          id: item.id,
          food: editFood,
          foodExpense: editFoodExpense,
          place: editPlace,
          country,
          currencyCode,
          tripDate,
          exchangedMoney: editExchangedMoney,
          star: rating,
        })
      );
      dispatch(saveItem());
      setOnEdit(false);
    }
  };

  const handleDelete = (id: string) => {
    setDeleteConfirm(false);
    dispatch(removeItem(id));
    dispatch(saveItem());
  };

  const onEditClick = () => {
    setOnEdit(true);
    setIsActiveMenu(false);
  };

  useEffect(() => {
    setEditExchangedMoney(Math.round(exchangeRate * parseInt(editFoodExpense)));
  }, [exchangeRate, editFoodExpense]);

  const contentItemViewData = {
    onClickVerticalMenu: (event: MouseEvent<HTMLButtonElement>) => {
      setMenuLocation({ x: event.clientX, y: event.pageY });
      setIsActiveMenu(true);
    },
    isActiveMenu,
    menuLocation,
    onEditClick,
    handleLeaveVerticalMenu: () => setIsActiveMenu(false),
    openConfirm: () => {
      setDeleteConfirm(true);
      setIsActiveMenu(false);
    },
    deleteConfirm,
    cancelDelete: () => setDeleteConfirm(false),
    handleDelete: () => handleDelete(item.id),
    handleContextMenu: (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      setMenuLocation({ x: event.clientX, y: event.pageY });
      setIsActiveMenu(true);
    },
    handleDoubleClick: () => setOnEdit(true),
  };

  const editFormDate = {
    onSubmit,
    tripDate,
    handleDateClick,
    handleCountrySelect,
    country,
    rating,
    onRating: (rate: number) => setrating(rate),
    editFood,
    editPlace,
    onEditPlaceChange,
    onEditFoodChange,
    editFoodExpense,
    onEditFoodExpenseChange,
    editExchangedMoney,
    onEditCancelClick: () => setOnEdit(false),
  };
  return (
    <>
      {onEdit ? (
        <ItemEditFormView data={editFormDate} />
      ) : (
        <ContentItemView item={item} viewData={contentItemViewData} />
      )}
    </>
  );
};

export default ContentItem;
