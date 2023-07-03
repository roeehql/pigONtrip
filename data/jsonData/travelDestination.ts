type TravelDestinationState = {
    index: number;
    currencyCode: string;
    country: string;
    currencyName: string;
}
export const travelDestination:TravelDestinationState[] = [ 
    {index: 1, currencyCode : "USD",  country: "미국", currencyName:"달러"},
    {index: 2, currencyCode : "JPY",  country: "일본", currencyName:"엔",},
    {index: 3, currencyCode : "TWD",  country: "대만", currencyName:"신 타이완 달러",},
    {index: 4, currencyCode : "SGD",   country: "싱가폴", currencyName:"달러",},
    {index: 5, currencyCode : "VND",  country: "베트남", currencyName:"동",},
    {index: 6, currencyCode : "IDR",  country: "발리", currencyName:"루피아",},
    {index: 7, currencyCode : "AUD", country: "호주", currencyName:"오스트레일리아 달러",},
    {index: 8, currencyCode : "EUR",  country: "유럽", currencyName:"유로",},
    {index: 9, currencyCode : "CHF",  country: "스위스", currencyName:"프랑",},
    {index: 10, currencyCode : "MXN",  country: "멕시코", currencyName:"페소",}];