import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userIsLogged: false,
  userName: "",
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
    logoutUser(state) {
      state.userIsLogged = false;
    },
  },
});

export const { logUser, logoutUser } = loginSlice.actions;
