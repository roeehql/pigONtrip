import axios from "axios";
import { useState, useEffect } from "react";

interface GetCurrencyProps {
    date : string,
    code : string,
}

export const useGetCurrency = ({date , code}:GetCurrencyProps) => {
    const [exchangeRate, setExchangeRate] = useState(1);

    const getCurrency = async ({date , code}:GetCurrencyProps) => {
        const { data } = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${code.toLowerCase()}.json`);    
        const list = data[`${code.toLowerCase()}`];
        setExchangeRate(list.krw);
    }

    useEffect(()=>{
        getCurrency({date , code});
    },[date, code]);
  
    return exchangeRate;
}