import {configureStore} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import contentsSlice from './contentsSlice';
import userNameSlice from './userNameSlice';
import toastSlice from './toastSlice';

const store = configureStore({
  reducer:{
    userName : userNameSlice,
    contentsList : contentsSlice,
    toast : toastSlice
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector