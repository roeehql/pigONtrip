import { ChangeEvent } from "react";
import { useGetTravelDestination } from "@hooks/useGetTravelDestination";
import styles from "@styles/components/writeForm/SelectCountry.module.scss";

const SelectCountry = ({
  onChange,
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const travelDestinationList = useGetTravelDestination();

  return (
    <div className={styles.select_country}>
      {travelDestinationList.map((item) => (
        <label key={item.index} className={styles.label}>
          <input
            type="radio"
            name="country"
            id={item.country}
            onChange={onChange}
            value={[item.country, item.currencyCode]}
          />
          <h4 className={styles.h4}>
            {item.country} - {item.currencyName}
          </h4>
        </label>
      ))}
    </div>
  );
};

export default SelectCountry;
