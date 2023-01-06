import { travelDestination } from "./data/travelDestination";
import { OnChangeState } from "@@types/dataTypes";
import styles from "@styles/components/writeForm/SelectCountry.module.scss";

const SelectCountry = ({ onChange }: OnChangeState) => {
  return (
    <div className={styles.select_country}>
      {travelDestination.map((item) => (
        <label key={item.index} className={styles.label}>
          <input
            type="radio"
            name="country"
            id={item.country}
            onChange={onChange}
            value={[item.country, item.currencyCode]}
          />
          <h4 className={styles.h4}>{item.country}</h4>
        </label>
      ))}
    </div>
  );
};

export default SelectCountry;
