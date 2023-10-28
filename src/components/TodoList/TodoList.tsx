import React from "react";
import { Todo } from "../Todo/Todo";
import { useSelector } from "react-redux";
import { selectedTodos } from "../../store/todo/todoSelectors";

import styles from "./TodoList.module.css";

export const TodoList = () => {
  const todos = useSelector(selectedTodos);

  return (
    <ul className={styles["todo-list"]}>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} todo={todo.todo} date={todo.date} />
      ))}
    </ul>
  );
};
