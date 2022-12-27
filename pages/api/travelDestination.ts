import { TravelDestinationState } from "@@types/apiTypes";
import { NextApiRequest, NextApiResponse } from "next";


const travelDestination:TravelDestinationState[] = [ 
    {index: 1, currencyCode : "USD", continent:"북미", country: "미국", currencyName:"달러"},
    {index: 2, currencyCode : "CAD",  continent:"북미", country: "캐나다", currencyName:"캐나다 달러",},
    {index: 3, currencyCode : "JPY",  continent:"동아시아", country: "일본", currencyName:"엔",},
    {index: 4, currencyCode : "CNY",  continent:"동아시아", country: "중국", currencyName:"위안",},
    {index: 5, currencyCode : "TWD",  continent:"동아시아", country: "대만", currencyName:"신 타이완 달러",},
    {index: 6, currencyCode : "SGD",  continent:"동남아시아", country: "싱가폴", currencyName:"달러",},
    {index: 7, currencyCode : "VND",  continent:"동남아시아", country: "베트남", currencyName:"동",},
    {index: 8, currencyCode : "IDR",  continent:"동남아시아", country: "발리", currencyName:"루피아",},
    {index: 9, currencyCode : "AUD", continent:"오세아니아",  country: "호주", currencyName:"오스트레일리아 달러",},
    {index: 10, currencyCode : "NZD", continent:"오세아니아",  country: "뉴질랜드", currencyName:"뉴질랜드 달러",},
    {index: 11, currencyCode : "GBP", continent:"유럽",  country: "영국", currencyName:"파운드",},
    {index: 12, currencyCode : "EUR", continent:"유럽",  country: "유럽", currencyName:"유로",},
    {index: 13, currencyCode : "CHF", continent:"유럽",  country: "스위스", currencyName:"프랑",},
    {index: 14, currencyCode : "MXN", continent:"남미",  country: "멕시코", currencyName:"페소",},
    {index: 15, currencyCode : "ARS", continent:"남미",  country: "아르헨티나", currencyName:"페소",}, ];


export default function travelDestinationHandler(req : NextApiRequest, res: NextApiResponse<TravelDestinationState[]>) {
    res.status(200).json(travelDestination)
}