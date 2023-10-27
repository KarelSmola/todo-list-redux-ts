import React, { useState, FocusEvent } from "react";
import { useDispatch } from "react-redux";
import { logUser } from "../../store/login/loginSlice";

import { Button } from "../UI/Button/Button";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const [inputValues, setInputValues] = useState({
    userName: "",
    userPass: "",
  });

  const [inputBlur, setInputBlur] = useState({
    userName: false,
    userPass: false,
  });

  const { userName, userPass } = inputValues;

  const dispatch = useDispatch();

  const loginBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    const name = e.target.name;

    setInputBlur((prevState) => {
      return { ...prevState, [name]: true };
    });
  };

  const loginChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const nameValueIsValid = userName.length > 3;
  const invalidName = !nameValueIsValid && inputBlur.userName;
  const nameClasses = invalidName
    ? `${styles.input} ${styles.invalid}`
    : `${styles.input}`;

  const passValueIsValid = userPass.length > 4;
  const invalidPass = !passValueIsValid && inputBlur.userPass;
  const passClasses = invalidPass
    ? `${styles.input} ${styles.invalid}`
    : `${styles.input}`;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userName, userPass } = inputValues;

    setInputBlur({ userName: true, userPass: true });

    if (!userName.length || !userPass.length) {
      return;
    }

    dispatch(logUser(inputValues));
    setInputValues({ userName: "", userPass: "" });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["label-box"]}>
        <label className={styles.label} htmlFor="userName">
          User Name
        </label>
        <input
          className={nameClasses}
          type="text"
          placeholder="At least 4 charecters"
          id="userName"
          name="userName"
          onBlur={loginBlurHandler}
          onChange={loginChangeHandler}
          value={userName}
        />
      </div>
      <div className={styles["label-box"]}>
        <label className={styles.label} htmlFor="userPass">
          Password
        </label>
        <input
          className={passClasses}
          type="password"
          placeholder="At least 5 charecters"
          id="userPass"
          name="userPass"
          onBlur={loginBlurHandler}
          onChange={loginChangeHandler}
          value={userPass}
        />
      </div>
      <Button className={styles["login-btn"]} type="submit">
        Login
      </Button>
    </form>
  );
};
