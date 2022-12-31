import styles from "@styles/components/writeForm/WriteForm.module.scss";

const FormSkeleton = () => {
  return (
    <div className={styles.form_skeleton}>
      <div className={styles.formbox_skeleton}></div>
      <div className={styles.button_skeleton}></div>
    </div>
  );
};

export default FormSkeleton;
