import { useState } from "react";
import useHandleSelect from "@components/writeform/hooks/useHandleSelect";
import FormContainer from "./FormContainer";
import SelectCountryPage from "./view/SelectCountryPage";
import SelectDatePage from "./view/SelectDatePage";

const WriteLayout = () => {
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
        <SelectCountryPage
          onNextClick={() => setPage(2)}
          country={country}
          handleOnEnter={() => setPage(2)}
          handleCountryClick={handleCountryClick}
        />
      )}
      {page === 2 && (
        <SelectDatePage
          onPrevClick={() => setPage(1)}
          onNextClick={() => setPage(3)}
          handleOnEnter={() => setPage(3)}
          handleDateClick={handleDateClick}
        />
      )}
      {page === 3 && <FormContainer {...data} />}
    </div>
  );
};

export default WriteLayout;
