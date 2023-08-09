import { handleStorage } from "@data/browserStorage/localStorages";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USERLIST, USERNAME } from "data/browserStorage/keys.constant";
import { AppState } from "./store";

const initialState : string[] = []

const userListSlice = createSlice({
   name:'userListSlice',
   initialState,
   reducers:{
    createUserName: (state, action:PayloadAction<string>) => {
        state.push(action.payload);
        handleStorage.setStorage(USERLIST, JSON.stringify(state));
        return state;
      },
    setUserList: (state) => {
        state = [];
        state.push(handleStorage.getStorage(USERNAME))
        return state;
      },
    signOutUser :  (state, action:PayloadAction<string>) => {
        state = state.filter((user) => user !== action.payload);
        handleStorage.setStorage(USERLIST, JSON.stringify(state));
        return state;
      },
    resetUserList : (state) => {
        state = initialState
        handleStorage.resetStorage()
        return state;
      },
   },
});

export default userListSlice.reducer;
export const {resetUserList, signOutUser , setUserList , createUserName} = userListSlice.actions;
export const selectUser = (state: AppState) => state.userList



