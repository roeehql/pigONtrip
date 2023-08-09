import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";

const initialState = ""

const userNameSlice = createSlice({
   name:'userInfoSlice',
   initialState,
   reducers:{
    saveUserName: (state, action:PayloadAction<string>) => {
        state = action.payload;
        return state;
      },
    removeUserName : (state) => {
        state = initialState
        return state;
      },
   },
});

export default userNameSlice.reducer;
export const {removeUserName ,saveUserName} = userNameSlice.actions;
export const selectUserName = (state: AppState) => state.userName



