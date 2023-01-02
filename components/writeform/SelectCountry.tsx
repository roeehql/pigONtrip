import { ChangeEvent, Suspense } from "react";
import { useGetTravelDestination } from "@hooks/useGetTravelDestination";
import styles from "@styles/components/writeForm/SelectCountry.module.scss";
import FormSkeleton from "@components/atomic/FormSkeleton";

const SelectCountry = ({
  onChange,
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const travelDestinationList = useGetTravelDestination();

  return (
    <Suspense fallback={<FormSkeleton />}>
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
            <h4 className={styles.h4}>{item.country}</h4>
          </label>
        ))}
      </div>
    </Suspense>
  );
};

export default SelectCountry;
