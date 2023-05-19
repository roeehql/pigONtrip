import { useState } from "react";
import useHandleSelect from "@hooks/useHandleSelect";
import SelectCountry from "./SelectCountry";
import SelectDate from "./SelectDate";
import Button from "@components/atomic/Button";
import FormContainer from "./FormContainer";
import { FaMap } from "react-icons/fa";

const WriteForm = () => {
  const [page, setPage] = useState(1);
  const {
    country,
    currencyCode,
    tripDate,
    handleCountryClick,
    handleDateClick,
  } = useHandleSelect("");

  const data = {
    country,
    currencyCode,
    tripDate,
    setFirstPage: () => setPage(1),
    setSecondPage: () => setPage(2),
  };

  return (
    <div className="flex flex-col justify-items-center w-full min-h-600 mb-5">
      {page === 1 && (
        <div className="flex flex-col justify-between items-center h-600 pt-80">
          <SelectCountry onChange={handleCountryClick} />
          <div className="flex flex-row">
            <div className="min-w-fit min-h-fit px-8 py-3 m-6 text-4xl">
              <FaMap />
            </div>
            <Button
              text={"다음"}
              large={true}
              color="red"
              type={"button"}
              onClick={() => setPage(2)}
            />
          </div>
        </div>
      )}
      {page === 2 && (
        <div className="flex flex-col justify-between items-center h-600 pt-80">
          <SelectDate onChange={handleDateClick} />
          <div className="flex flex-row">
            <Button
              text={"이전"}
              large={true}
              type={"button"}
              onClick={() => setPage(1)}
            />
            <Button
              text={"다음"}
              large={true}
              color="red"
              type={"button"}
              onClick={() => setPage(3)}
            />
          </div>
        </div>
      )}
      {page === 3 && <FormContainer {...data} />}
    </div>
  );
};

export default WriteForm;
