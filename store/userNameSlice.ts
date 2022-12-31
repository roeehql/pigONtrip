import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserNameSliceState {
    value : string;
}

const initialState : UserNameSliceState = {
    value : "방랑돼지",
}
const userNameSlice = createSlice({
   name:'userInfoSlice',
   initialState,
   reducers:{
    removeUserName : (state) => {
        state.value = "방랑돼지"
    },
    editUserName : (state, action:PayloadAction<string>) => {
        state.value = action.payload;
    },
   },
});

export default userNameSlice.reducer;
export const {editUserName , removeUserName} = userNameSlice.actions;
export const selectGetSession = (state: UserNameSliceState) => state.value;
