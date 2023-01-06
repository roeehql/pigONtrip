import { getToday, getYesterDay } from "util/getToday";
import { OnChangeState } from "@@types/dataTypes";
import styles from "@styles/components/writeForm/SelectDate.module.scss";

const SelectDate = ({ onChange }: OnChangeState) => {
  return (
    <div className={styles.select_date}>
      <label className={styles.label}>
        <input
          type="radio"
          name="date"
          id="today"
          onChange={onChange}
          value={getToday()}
        />
        <h4 className={styles.h4}>오늘 ( {getToday()} )</h4>
      </label>
      <label className={styles.label}>
        <input
          type="radio"
          name="date"
          id="yesterday"
          onChange={onChange}
          value={getYesterDay()}
        />
        <h4 className={styles.h4}>어제 ( {getYesterDay()} )</h4>
      </label>
    </div>
  );
};

export default SelectDate;
