import Button from "@components/atomic/Button";
import { MouseEvent } from "react";
import { useGetTravelDestination } from "@hooks/useGetTravelDestination";
import styles from "@styles/components/writeForm/Select.module.scss";

const SelectCountry = ({
  onClick,
}: {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const travelDestinationList = useGetTravelDestination();

  return (
    <div className={styles.select_box}>
      {travelDestinationList.map((item) => (
        <Button
          key={item.index}
          text={item.country}
          large={false}
          type={"button"}
          value={item.currencyCode}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default SelectCountry;
