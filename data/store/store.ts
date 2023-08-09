import {configureStore} from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import contentsSlice from './contentsSlice';
import userNameSlice from './userNameSlice';
import toastSlice from './toastSlice';
import userListSlice from './userListSlice';

const store = () => configureStore({
  reducer:{
    userList: userListSlice,
    userName : userNameSlice,
    contentsList : contentsSlice,
    toast : toastSlice
  },
  devTools: true,
  },
);

const wrapper = createWrapper(store)

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

export default wrapper