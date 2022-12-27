import axios from "axios";

interface GetCurrencyProps {
    date : string,
    code : string,
}

export const getCurrency = async ({date , code}:GetCurrencyProps) => {
    const { data } = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${code.toLowerCase()}.json`);    
    return data;
}
