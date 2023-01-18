import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CONTENTS_LIST } from "util/constant/query.constant";

export interface ContentsSliceState {
        id: string,
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
    },
    getItem : (state)=>{
        const loadedContents = localStorage.getItem(CONTENTS_LIST);
        if (loadedContents !== null) {
            state = [];
            const parsedContents: ContentsSliceState[] = JSON.parse(loadedContents);
          parsedContents.forEach((element) => {
            state.push({...element});
          });
        }
        return state;
    },
    editItem : (state,action:PayloadAction<ContentsSliceState>) =>{
        let index = state.findIndex((item)=> item.id === action.payload.id);
        state.splice(index, 1 , action.payload);
        return state;
    },
    removeItem : (state,action:PayloadAction<string>) => {
        state =  state.filter((item)=> item.id !== action.payload);
        return state;
    },
    saveItem : (state) => {
        localStorage.setItem(CONTENTS_LIST, JSON.stringify(state));        
    },
    resetItem : (state) => {
        state = [];
    }
   },
});

export default contentsSlice.reducer;
export const {addItem,removeItem, getItem, saveItem , resetItem , editItem} = contentsSlice.actions;
