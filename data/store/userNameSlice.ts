import { HYDRATE } from "next-redux-wrapper";
import { handleStorage } from "@data/browserStorage/localStorages";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USERNAME } from "data/browserStorage/keys.constant";
import { AppState } from "./store";

export interface UserNameSliceState {
    name : string;
    isLoggedIn : boolean;
}

const initialState : UserNameSliceState[] = []

const userNameSlice = createSlice({
   name:'userInfoSlice',
   initialState,
   reducers:{
    createUserName: (state, action:PayloadAction<UserNameSliceState>) => {
        state.push({ ...action.payload });
        handleStorage.setStorage(USERNAME, JSON.stringify(state));
      },
    saveUserName: (state) => {
      handleStorage.setStorage(USERNAME, JSON.stringify(state));
      },
    getUserList: (state) => {
        state = [];
        const getUserList:string | "no data" = handleStorage.getStorage(USERNAME);
        if(getUserList !== "no data"){
          const parsedUserList = JSON.parse(getUserList)          
          state = [...parsedUserList]
        }
        return state;
      },
    removeUserName :  (state, action:PayloadAction<string>) => {
        state = state.filter((user) => user.name !== action.payload);
        return state;
      },
    resetUserName : (state) => {
        state = initialState
      },
    editUserName : (state, action:PayloadAction<UserNameSliceState>) => {
        let index = state.findIndex((user) => user.name === action.payload.name);
        state.splice(index, 1, action.payload);
        handleStorage.setStorage(USERNAME, JSON.stringify(state));
        return state;
    },
   },
});

export default userNameSlice.reducer;
export const {editUserName ,resetUserName, removeUserName , getUserList, saveUserName , createUserName} = userNameSlice.actions;
export const selectUser = (state: AppState) => state.userName



