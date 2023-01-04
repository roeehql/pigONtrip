import { NextApiRequest, NextApiResponse } from "next";

type TravelDestinationState = {
    index: number;
    currencyCode: string;
    country: string;
    currencyName: string;
}
const travelDestination:TravelDestinationState[] = [ 
    {index: 1, currencyCode : "USD",  country: "미국", currencyName:"달러"},
    {index: 2, currencyCode : "CAD",  country: "캐나다", currencyName:"캐나다 달러",},
    {index: 3, currencyCode : "JPY",  country: "일본", currencyName:"엔",},
    {index: 4, currencyCode : "CNY",  country: "중국", currencyName:"위안",},
    {index: 5, currencyCode : "TWD",  country: "대만", currencyName:"신 타이완 달러",},
    {index: 6, currencyCode : "SGD",   country: "싱가폴", currencyName:"달러",},
    {index: 7, currencyCode : "VND",  country: "베트남", currencyName:"동",},
    {index: 8, currencyCode : "IDR",  country: "발리", currencyName:"루피아",},
    {index: 9, currencyCode : "AUD", country: "호주", currencyName:"오스트레일리아 달러",},
    {index: 10, currencyCode : "NZD",  country: "뉴질랜드", currencyName:"뉴질랜드 달러",},
    {index: 11, currencyCode : "GBP",  country: "영국", currencyName:"파운드",},
    {index: 12, currencyCode : "EUR",  country: "유럽", currencyName:"유로",},
    {index: 13, currencyCode : "CHF",  country: "스위스", currencyName:"프랑",},
    {index: 14, currencyCode : "MXN",  country: "멕시코", currencyName:"페소",},
    {index: 15, currencyCode : "ARS",  country: "아르헨티나", currencyName:"페소",}, ];


export default function travelDestinationHandler(req : NextApiRequest, res: NextApiResponse<TravelDestinationState[]>) {
    res.status(200).json(travelDestination)
}