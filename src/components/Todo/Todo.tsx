import React from "react";

import styles from "./Todo.module.css";

type TodoProp = { todo: string; date: string };

export const Todo: React.FC<TodoProp> = ({ todo, date }) => {
  return (
    <li>
      <p>{date}</p>
      <p>{todo}</p>
    </li>
  );
};
