import {configureStore} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createWrapper } from "next-redux-wrapper";
import contentsSlice from './contentsSlice';
import userNameSlice from './userNameSlice';
import toastSlice from './toastSlice';

const store = () => configureStore({
  reducer:{
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