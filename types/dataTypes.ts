import { FormEvent,ChangeEvent } from "react";

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


  export interface ContentItemDataState {
    item: ItemState;
    data: {
      onClickVerticalMenu: () => void;
      active: boolean;
      onEditClick: () => void;
      handleLeaveVerticalMenu: () => void;
      handleDelete: () => void;
    };
  }

  export interface ItemEditFormViewState {
    data : {
      onSubmit: (event: FormEvent<HTMLFormElement>) => void;
      tripDate: string;
      handleDateClick: (event: ChangeEvent<HTMLInputElement>) => void;
      handleCountrySelect: (event: ChangeEvent<HTMLSelectElement>) => void;
      country: string;
      rating: number;
      onRating: (rate: number) => void;
      editFood: string;
      onEditFoodChange: (e: ChangeEvent<HTMLInputElement>) => void;
      editFoodExpense: string;
      onEditFoodExpenseChange: (e: ChangeEvent<HTMLInputElement>) => void;
      editExchangedMoney: number;
      onEditCancelClick: () => void;
  }
}

export interface WriteFormViewState {
  data : {
      page: number;
      handleCountryClick: (event: ChangeEvent<HTMLInputElement>) => void;
      handleDateClick: (event: ChangeEvent<HTMLInputElement>) => void;
      onClickSetPage1: () => void;
      onClickSetPage2: () => void;
      onClickSetPage3: () => void;
      handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
      food: string;
      onFoodChange: (e: ChangeEvent<HTMLInputElement>) => void;
      rating: number;
      onRating: (rate: number) => void;
      foodExpense: string;
      onFoodExpenseChange: (e: ChangeEvent<HTMLInputElement>) => void;
      exchangedMoney: number;
  }
}
