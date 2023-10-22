import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logUser(state, action) {
      console.log(action.payload);
    },
  },
});
