import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USERNAME } from "data/browserStorage/keys.constant";
import { getStorage, setStorage } from "data/browserStorage/localStorages";

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
        setStorage(USERNAME, JSON.stringify(state));
      },
    saveUserName: (state) => {
      setStorage(USERNAME, JSON.stringify(state));
      },
    getUserList: (state) => {
        state = [];
        if(getStorage(USERNAME) !== "no data"){
            const parsedUserList = getStorage(USERNAME);
            [...parsedUserList].forEach((user) => {
                state.push({ ...user });
            });
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
        setStorage(USERNAME, JSON.stringify(state));
        return state;
    },
   },
});

export default userNameSlice.reducer;
export const {editUserName ,resetUserName, removeUserName , getUserList, saveUserName , createUserName} = userNameSlice.actions;
export const selectGetSession = (state: UserNameSliceState) => state;
