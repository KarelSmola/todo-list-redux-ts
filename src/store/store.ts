import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { loginSlice } from "./login/loginSlice";
import { todoSlice } from "./todo/todoSlice";

const rootReducer = combineReducers({
  login: loginSlice.reducer,
  todo: todoSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
