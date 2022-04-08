import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  pwd: string;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    pwd: "",
  },
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.pwd = action.payload.pwd;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
