import { ChangeEvent } from "react";
import { useState } from "react";
import { getToday } from "util/getToday";

const useSelectCountry = (initialCountry : string , initialCurrencyCode = "KRW") => {
  const [country, setCountry] = useState(initialCountry);
  const [currencyCode, setCurrencyCode] = useState(initialCurrencyCode);
  const [tripDate , setTripDate] = useState(getToday());

  const handleCountryClick = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setCountry(value.split(',')[0]);
    setCurrencyCode(value.split(',')[1]);
  };

  const handleCountrySelect = (event: ChangeEvent<HTMLSelectElement>)=>{
    const {
      target: { value },
    } = event;
    setCountry(value.split(',')[0]);
    setCurrencyCode(value.split(',')[1]);
  }

  const handleDateClick = (event: ChangeEvent<HTMLInputElement>)=>{
    const {
      target: { value },
    } = event;
    setTripDate(value);
  }
    return {country , currencyCode , tripDate, handleCountryClick , handleDateClick , handleCountrySelect};
}

export default useSelectCountry;