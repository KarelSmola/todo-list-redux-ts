import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateType } from "../../types/type";

type Todo = { id: string; todo: string; date: DateType };

type TodosState = {
  todos: Todo[];
  editForm: boolean;
  editTodo: { id?: string; todo?: string; date?: DateType };
};

const initialState: TodosState = { todos: [], editForm: false, editTodo: {} };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTodo(
      state,
      action: PayloadAction<{
        id: string;
        todo: string;
        date: DateType;
      }>
    ) {
      state.todos = [action.payload, ...state.todos];
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo(state, action) {
      state.editForm = true;

      const editTodoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );

      state.editTodo = state.todos[editTodoIndex];
    },
    saveEditTodo(state, action) {
      const editedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return { ...todo };
        }
      });

      state.todos = editedTodos;
      state.editTodo = {};
      state.editForm = false;
    },
    cancelEditForm(state) {
      state.editForm = false;
      state.editTodo = {};
    },
    removeAllTodos(state) {
      state.todos = [];
    },
  },
});

export const {
  addNewTodo,
  removeTodo,
  editTodo,
  saveEditTodo,
  cancelEditForm,
  removeAllTodos,
} = todoSlice.actions;
