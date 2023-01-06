import styles from "@styles/components/atomic/Skeleton.module.scss";

const FormSkeleton = () => {
  return (
    <div className={styles.skeleton_zone}>
      <div className={styles.form_skeleton}>
        <div className={styles.formbox_skeleton}></div>
        <div className={styles.button_skeleton}></div>
      </div>
    </div>
  );
};

export default FormSkeleton;
