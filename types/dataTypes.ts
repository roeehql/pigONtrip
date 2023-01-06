import { ChangeEvent } from "react";

export interface MyPageDataState {
    data: {
        active: boolean;
        userName: string;
        editName: string;
        onEditNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
        handleEditUserName: () => void;
        onCancelButtonClick: () => void;
        onEditButtonClick: () => void;
        handleAllContentsDelete: () => false | undefined;
    }
}

export interface ItemState {
    id: string;
    food: string;
    foodExpense: string;
    exchangedMoney: number;
    country: string;
    currencyCode: string;
    tripDate: string;
    star: number;
  }

  export interface OnChangeState {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }