import { RootState } from "../store";

export const selectedTodos = (state: RootState) => state.todo.todos;

export const selectedEditTodo = (state: RootState) => state.todo.editTodo;

export const selectedEditForm = (state: RootState) => state.todo.editForm;
