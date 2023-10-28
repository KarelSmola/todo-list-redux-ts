import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userIsLogged: true,
  userName: "John",
  userPass: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logUser(state, action) {
      state.userIsLogged = true;
      state.userName = action.payload.userName;
      state.userPass = action.payload.userPass;
    },
  },
});

export const { logUser } = loginSlice.actions;
