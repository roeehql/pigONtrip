import { MouseEvent } from "react";
import { useState } from "react";

const useSelectCountry = (initialCountry : string , initialCurrencyCode = "KRW") => {
  const [country, setCountry] = useState(initialCountry);
  const [currencyCode, setCurrencyCode] = useState(initialCurrencyCode);

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const {
      target: { value , innerText },
    } = event;
    setCurrencyCode(value);
    setCountry(innerText);
  };
    return {country , currencyCode , handleButtonClick};
}

export default useSelectCountry;