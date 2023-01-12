import { useState } from "react";
import dynamic from "next/dynamic";

import { handleAmountComma } from "util/handleAmountComma";
import { useAppDispatch } from "@store/store";
import { removeItem, saveItem } from "@store/contentsSlice";

import { ItemState } from "@@types/dataTypes";

const ItemEditForm = dynamic(() => import("./ItemEditForm"));

import { FiMoreVertical } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import style from "@styles/components/contents/ContentItem.module.scss";

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
          <div className={style.item_p}>
            <div>
              <small className={style.item_small}>{item.tripDate}</small>
              <span className={style.item_span_food}>{item.country}</span>
            </div>
            <div>
              <span>{item.food}</span>{" "}
              <span>
                {Array(item.star)
                  .fill(0)
                  .map((item, index) => (
                    <FaStar key={index} style={{ color: "#feca57" }} />
                  ))}
              </span>
            </div>
            <div>
              <span>
                {item.foodExpense} {item.currencyCode}
              </span>{" "}
              ➡️
              <span>{handleAmountComma(item.exchangedMoney)} 원</span>
            </div>
          </div>
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
