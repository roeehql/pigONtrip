import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { handleAmountComma } from "util/handleAmountComma";
import style from "@styles/components/contents/ContentItem.module.scss";
import { useAppDispatch } from "@store/store";
import { removeItem, saveItem } from "@store/contentsSlice";
import ItemEditForm from "./ItemEditForm";
import { FaStar } from "react-icons/fa";

export interface ItemState {
  id: string;
  food: string;
  foodExpense: string;
  exchangedMoney: number;
  country: string;
  currencyCode: string;
  tripDate: string;
  star: number;
}

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

  return (
    <>
      {onEdit ? (
        <ItemEditForm
          content={item}
          onEditCancelClick={() => setOnEdit(false)}
        />
      ) : (
        <div className={style.item_box}>
          <p className={style.item_p}>
            <small className={style.item_small}>{item.tripDate}</small>
            <span>{item.country}</span> <span>{item.food}</span>{" "}
            <span>
              {item.foodExpense} {item.currencyCode}
            </span>{" "}
            ➡️
            <span>{handleAmountComma(item.exchangedMoney)} 원</span>
            <span>
              {Array(item.star)
                .fill(0)
                .map((item, index) => (
                  <FaStar key={index} style={{ color: "#feca57" }} />
                ))}
            </span>
          </p>
          <div>
            <button
              className={style.item_button}
              onClick={() => setActive(true)}
            >
              <FiMoreVertical />
            </button>
            {active && (
              <div
                className={style.item_menu}
                onMouseLeave={() => setActive(false)}
              >
                <button
                  className={style.item_menu_button}
                  onClick={() => handleDelete(item.id)}
                >
                  삭제
                </button>
                <button
                  className={style.item_menu_button}
                  onClick={onEditClick}
                >
                  수정
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContentItem;
