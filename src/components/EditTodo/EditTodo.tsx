import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedEditTodo } from "../../store/todo/todoSelectors";
import { saveEditTodo, cancelEditForm } from "../../store/todo/todoSlice";

import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import styles from "./EditTodo.module.css";

export const EditTodo = () => {
  const editTodo = useSelector(selectedEditTodo);
  const { todo } = editTodo;

  const [editTodoValue, setEditTodoValue] = useState(todo);

  const dispatch = useDispatch();

  const editTodoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodoValue(e.target.value);
  };

  const submitEditForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const editDate = new Date(2023, 10, 10);
    const day = editDate.getDate();
    const month = editDate.toLocaleDateString("en", { month: "short" });
    const year = editDate.getFullYear();

    const editedTodo = {
      ...editTodo,
      date: { day, month, year },
      todo: editTodoValue,
    };

    dispatch(saveEditTodo(editedTodo));
  };

  const removeEditForm = () => {
    dispatch(cancelEditForm());
  };

  return (
    <>
      <form onSubmit={submitEditForm} className={styles["edit-form"]}>
        <div className={styles["label-box"]}>
          <label>Edit todo</label>
          <Input onChange={editTodoChangeHandler} value={editTodoValue} />
        </div>
        <Button type="submit">Save</Button>
      </form>
      <Button onClick={removeEditForm}>Cancel</Button>
    </>
  );
};
