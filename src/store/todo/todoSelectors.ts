import { RootState } from "../store";

export const selectedTodos = (state: RootState) => state.todo.todos;
