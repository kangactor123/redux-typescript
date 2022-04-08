import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer";
import counterReducer from "./slicer/counterSlice";

export default configureStore({
  reducer:{
    counter: counterReducer,
    user: userReducer,
  }
});

