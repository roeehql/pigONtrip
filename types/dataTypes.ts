import { FormEvent , ChangeEvent , MouseEvent} from "react";

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
    place: string;
    currencyCode: string;
    tripDate: string;
    star: number;
  }

  export interface OnChangeState {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }


  export interface ContentItemDataState {
      onClickVerticalMenu: (event:MouseEvent<HTMLButtonElement>) => void;
      isActiveMenu: boolean;
      menuLocation:{x:number, y:number};
      onEditClick: () => void;
      handleLeaveVerticalMenu: () => void;
      handleDelete: () => void;
      handleContextMenu: (event:MouseEvent<HTMLDivElement>)=>void;
      handleDoubleClick: (event:MouseEvent<HTMLDivElement>)=>void;
  }

  export interface EditFormDataState {
      onSubmit: (event: FormEvent<HTMLFormElement>) => void;
      tripDate: string;
      handleDateClick: (event: ChangeEvent<HTMLInputElement>) => void;
      handleCountrySelect: (event: ChangeEvent<HTMLSelectElement>) => void;
      country: string;
      rating: number;
      onRating: (rate: number) => void;
      editFood: string;
      onEditFoodChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
      editFoodExpense: string;
      onEditFoodExpenseChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
      editExchangedMoney: number;
      onEditCancelClick: () => void;
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
      place: string;
      onPlaceChange: (e: ChangeEvent<HTMLInputElement>) => void;
      rating: number;
      onRating: (rate: number) => void;
      foodExpense: string;
      onFoodExpenseChange: (e: ChangeEvent<HTMLInputElement>) => void;
      exchangedMoney: number;
  }
}
