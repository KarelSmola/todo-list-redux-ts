import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedEditTodo } from "../../../store/todo/todoSelectors";
import { saveEditTodo, cancelEditForm } from "../../../store/todo/todoSlice";

import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import styles from "./EditTodo.module.css";
import { CancelIcon, SaveIcon } from "../../UI/Icons";

export const EditTodo = () => {
  const [editInputTouched, setEditInputTouched] = useState(false);
  const editTodo = useSelector(selectedEditTodo);
  const { todo } = editTodo;

  const [editTodoValue, setEditTodoValue] = useState(todo);

  const dispatch = useDispatch();

  const editTodoBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditInputTouched(true);
  };

  const editTodoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodoValue(e.target.value);
  };

  const editTodoIsValid = editTodoValue;
  const invalidEditTodoValue = !editTodoIsValid && editInputTouched;
  const editTodoInputClasses = invalidEditTodoValue ? styles.invalid : "";

  const submitEditForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!editTodoValue) {
      return;
    }

    const editDate = new Date();
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
      {createPortal(
        <div className={styles.backdrop} onClick={removeEditForm} />,
        document.getElementById("backdrop") as HTMLElement
      )}
      {createPortal(
        <section className={styles["edit-todo"]}>
          <div className={styles["edit-todo-box"]}>
            <h2>Edit Todo Form</h2>
            <form onSubmit={submitEditForm} className={styles["edit-form"]}>
              <div className={styles["label-box"]}>
                <label className={styles.label} htmlFor="edit">
                  Edit todo
                </label>
                <Input
                  className={editTodoInputClasses}
                  id="edit"
                  name="edit"
                  onBlur={editTodoBlurHandler}
                  onChange={editTodoChangeHandler}
                  value={editTodoValue}
                />
              </div>
              <Button className={styles["save-btn"]} type="submit">
                <SaveIcon />
              </Button>
            </form>
          </div>
          <Button className={styles["cancel-btn"]} onClick={removeEditForm}>
            <CancelIcon />
          </Button>
        </section>,
        document.getElementById("modal") as HTMLElement
      )}
      ;
    </>
  );
};
