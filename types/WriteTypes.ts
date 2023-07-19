import {ChangeEvent,FormEvent} from "react"

export interface OnChangeState {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }

export interface InputFormState {
    food: string;
    place: string;
    rating: number;
    foodExpense: string;
    exchangedMoney: number;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onFoodChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onPlaceChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onRating: (rate: number) => void;
    onFoodExpenseChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }
  
  export interface FormContainerState {
    country : string,
    currencyCode : string,
    tripDate: string,
    setFirstPage : ()=> void,
    setSecondPage : ()=>void,
  }
  