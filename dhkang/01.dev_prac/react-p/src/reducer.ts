import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slicer/counterSlice";
import userSlice from "./slicer/userSlice";

export const counterReducer = combineReducers({
  counter: counterSlice,
});

export const userReducer = combineReducers({
  user: userSlice,
});

export type CounterState = ReturnType<typeof counterReducer>;
export type UserState = ReturnType<typeof userReducer>;

