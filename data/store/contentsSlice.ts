import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { CONTENTS } from "@data/browserStorage/keys.constant";
import { handleStorage } from "@data/browserStorage/localStorages";
import { AppState } from "./store";

export interface ContentsSliceState {
        id: string,
        userName: string,
        place: string,
        food: string,
        foodExpense: string,
        exchangedMoney: number,
        country: string,
        currencyCode: string,
        tripDate : string,
        star : number,
}

const initialState : ContentsSliceState[] = [];

const contentsSlice = createSlice({
   name:'contentsSlice',
   initialState,
   reducers:{
    addItem :  (state,action:PayloadAction<ContentsSliceState>) => {
        state.unshift({...action.payload})
        handleStorage.setStorage(CONTENTS, state);        
    },
    setItem : (state)=>{
        state = []
        const loadedContents:ContentsSliceState[] | "no data" = handleStorage.getStorage(CONTENTS);
        if (loadedContents !== "no data") {
            loadedContents.forEach((item)=>state.push(item));
          };
        return state
    },
    editItem : (state,action:PayloadAction<ContentsSliceState>) =>{
        let index = state.findIndex((item)=> item.id === action.payload.id);
        state.splice(index, 1 , action.payload);
        handleStorage.setStorage(CONTENTS, state);        
    },
    removeItem : (state,action:PayloadAction<string>) => {
        state =  state.filter((item)=> item.id !== action.payload);
        handleStorage.setStorage(CONTENTS, state);        
    },
    saveItem : (state) => {
        handleStorage.setStorage(CONTENTS, state);        
    },
    resetItem : (state,action:PayloadAction<string>) => {
        state = state.filter((item)=>item.userName !== action.payload);
        handleStorage.setStorage(CONTENTS, state);        
    }
   },
});

export default contentsSlice.reducer;
export const {addItem,removeItem, setItem, saveItem , resetItem , editItem} = contentsSlice.actions;
export const selectContents = (state:AppState) => state.contentsList