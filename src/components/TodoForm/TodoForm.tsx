import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../store/todo/todoSlice";

import styles from "./TodoForm.module.css";

export const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const todoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const newTodoObj = {
      date: `${day}. ${month}. ${year}`,
      id: Math.random().toString(),
      todo: newTodo,
    };

    dispatch(addNewTodo(newTodoObj));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          name="todo"
          onChange={todoChangeHandler}
          value={newTodo}
        />
      </div>
      <button type="submit">Add new todo</button>
    </form>
  );
};
