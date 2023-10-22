import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { loginSlice } from "./login/loginSlice";

const rootReducer = combineReducers({ login: loginSlice.reducer });

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
