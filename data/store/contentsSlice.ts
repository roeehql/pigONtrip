import { getStorage, resetStorage, setStorage } from "@data/browserStorage/localStorages";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setItem : (state,action:PayloadAction<string>)=>{
        const loadedContents:ContentsSliceState[] | "no data" = getStorage(action.payload);
        if (loadedContents !== "no data") {
            state = [];
            loadedContents.forEach((item) => {
            state.push({...item});
          });
        }
        return state
    },
    editItem : (state,action:PayloadAction<ContentsSliceState>) =>{
        let index = state.findIndex((item)=> item.id === action.payload.id);
        state.splice(index, 1 , action.payload);
    },
    removeItem : (state,action:PayloadAction<string>) => {
        state =  state.filter((item)=> item.id !== action.payload);
        return state
    },
    saveItem : (state, action:PayloadAction<string>) => {
        setStorage(action.payload, JSON.stringify(state));        
    },
    resetItem : (state) => {
        resetStorage()
        state = [];
    }
   },
});

export default contentsSlice.reducer;
export const {addItem,removeItem, setItem, saveItem , resetItem , editItem} = contentsSlice.actions;
