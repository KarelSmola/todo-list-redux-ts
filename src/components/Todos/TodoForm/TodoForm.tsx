import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../../store/todo/todoSlice";

import styles from "./TodoForm.module.css";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import { PlusIcon } from "../../UI/Icons";

type NewTodoObj = {
  date: { day: number; month: string; year: number };
  id: string;
  todo: string;
};

export const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todoBlur, setTodoBlur] = useState(false);
  const dispatch = useDispatch();

  const todoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const todoBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setTodoBlur(true);
  };

  const todoValueIsValid = newTodo.length > 0;
  const invalidTodo = !todoValueIsValid && todoBlur;
  const todoClasses = invalidTodo ? styles.invalid : "";

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodoBlur(true);

    if (!todoValueIsValid) {
      return;
    }

    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleDateString("en", { month: "short" });
    const year = date.getFullYear();

    const newTodoObj: NewTodoObj = {
      date: { day, month, year },
      id: crypto.randomUUID().toString(),
      todo: newTodo,
    };

    dispatch(addNewTodo(newTodoObj));
    setNewTodo("");
    setTodoBlur(false);
  };

  return (
    <form className={styles["todo-form"]} onSubmit={submitHandler}>
      <h2>Add new todo form</h2>
      <div className={styles["add-todo-box"]}>
        <div className={styles["todo-label-box"]}>
          <label htmlFor="todo">New todo</label>
          <Input
            className={todoClasses}
            type="text"
            placeholder="Write todo"
            name="todo"
            onBlur={todoBlurHandler}
            onChange={todoChangeHandler}
            value={newTodo}
          />
        </div>
        <Button className={styles["add-todo-btn"]} type="submit">
          <PlusIcon className={styles["add-todo-icon"]} />
        </Button>
      </div>
    </form>
  );
};
