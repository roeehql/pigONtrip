import { FormEvent , ChangeEvent , MouseEvent} from "react";

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

  export interface ContentItemDataState {
      onClickVerticalMenu: (event:MouseEvent<HTMLButtonElement>) => void;
      isActiveMenu: boolean;
      menuLocation:{x:number, y:number};
      openEditForm: () => void;
      handleLeaveVerticalMenu: () => void;
      deleteConfirm: boolean;
      openDeleteConfirm: ()=>void;
      cancelDelete: ()=>void;
      handleDelete: () => void;
      handleContextMenu: (event:MouseEvent<HTMLDivElement>)=>void;
      handleDoubleClick: (event:MouseEvent<HTMLDivElement>)=>void;
  }

  export interface PaginateDataState {
    paginateData: {
      handlePage: (page: number | "이전" | "다음") => void;
      pageNumber: number;
      currentPage: number;
    };
  }

  //using at "EditForm-Components"

  export interface OnChangeState {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }

 export interface EditDataState {
  closeEditForm: ()=>void;
  onEditCancelClick: () => void;
 }

 export interface EditFormValueDataState {
  tripDate: string;
  country: string;
  rating: number;
  editPlace:string;
  editFood: string;
  editFoodExpense: string;
  editExchangedMoney: number;  
 }

  export interface EditFormDataState {
      viewData : EditFormValueDataState,
      onSubmit: (event: FormEvent<HTMLFormElement>) => void;
      handleDateClick: (event: ChangeEvent<HTMLInputElement>) => void;
      handleCountrySelect: (event: ChangeEvent<HTMLSelectElement>) => void;
      onRating: (rate: number) => void;
      onEditPlaceChange: (e: ChangeEvent<HTMLTextAreaElement>) => void; 
      onEditFoodChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
      onEditFoodExpenseChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
      closeEditForm: ()=>void;
      onEditCancelClick: () => void;
}

