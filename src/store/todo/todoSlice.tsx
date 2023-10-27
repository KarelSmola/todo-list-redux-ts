import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MyState = {
  todos: { id: string; todo: string; date: string }[];
};

const initialState: MyState = { todos: [] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTodo(
      state,
      action: PayloadAction<{ id: string; todo: string; date: string }>
    ) {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { addNewTodo } = todoSlice.actions;
