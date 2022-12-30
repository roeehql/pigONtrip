import style from "@styles/components/contents/ContentItem.module.scss";

const ItemSkeleton = () => {
  return (
    <div className={style.item_skeleton}>
      <p className={style.item_skeleton_p}></p>
      <span className={style.item_skeleton_span}></span>
    </div>
  );
};

export default ItemSkeleton;
