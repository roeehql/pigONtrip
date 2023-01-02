import styles from "@styles/components/atomic/Skeleton.module.scss";

const ItemSkeleton = () => {
  return (
    <div className={styles.item_skeleton}>
      <p className={styles.item_skeleton_p}></p>
      <span className={styles.item_skeleton_span}></span>
    </div>
  );
};

export default ItemSkeleton;
