import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export interface UserInfoSliceState {
    value : string;
}

const initialState : UserInfoSliceState = {
    value : "방랑돼지"
}
const userInfoSlice = createSlice({
   name:'userInfoSlice',
   initialState,
   reducers:{
    editName : (state, action:PayloadAction<string>) => {
        state.value = action.payload;
    },
   },
});

export default userInfoSlice.reducer;
export const {editName} = userInfoSlice.actions;
export const selectGetSession = (state: UserInfoSliceState) => state.value;
