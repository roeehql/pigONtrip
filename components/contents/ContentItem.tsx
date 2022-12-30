import Button from "@components/atomic/Button";
import style from "@styles/components/contents/ContentItem.module.scss";
import { FiMoreVertical } from "react-icons/fi";

const ContentItem = () => {
  return (
    <div className={style.item_box}>
      <p className={style.item_p}>
        <small className={style.item_small}>2022-12-30</small>
        <span>미국</span> <span>바베큐</span> <span>10 USD</span> ➡️{" "}
        <span>1,000 원</span>
      </p>
      <button className={style.item_button}>
        <FiMoreVertical />
      </button>
    </div>
  );
};

export default ContentItem;
