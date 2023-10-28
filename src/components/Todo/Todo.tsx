import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../../store/todo/todoSlice";
import { DateType } from "../../types/type";

import { Button } from "../UI/Button/Button";
import { EditIcon, RemoveIcon } from "../UI/Icons";
import styles from "./Todo.module.css";
import { TodoDate } from "./TodoDate";

type TodoProps = {
  id: string;
  date: DateType;
  todo: string;
};

export const Todo = ({ id, date, todo }: TodoProps) => {
  const dispatch = useDispatch();

  const changeTodo = (id: string) => () => {
    dispatch(editTodo(id));
  };

  const deleteTodo = (id: string) => () => {
    dispatch(removeTodo(id));
  };

  return (
    <li className={styles.todo}>
      <TodoDate date={date} />
      <p className={styles["todo-title"]}>{todo}</p>
      <Button className={styles["edit-btn"]} onClick={changeTodo(id)}>
        <EditIcon />
      </Button>
      <Button className={styles["remove-btn"]} onClick={deleteTodo(id)}>
        <RemoveIcon />
      </Button>
    </li>
  );
};
