import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logUser } from "../../store/login/loginSlice";

import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const [inputValues, setInputValues] = useState({
    userName: "",
    userPass: "",
  });
  const { userName, userPass } = inputValues;

  const dispatch = useDispatch();

  const loginChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(logUser(inputValues));
    setInputValues({ userName: "", userPass: "" });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          onChange={loginChangeHandler}
          value={userName}
        />
      </div>
      <div>
        <label htmlFor="userPass">Password</label>
        <input
          type="password"
          id="userPass"
          name="userPass"
          onChange={loginChangeHandler}
          value={userPass}
        />
      </div>
      <button>Login</button>
    </form>
  );
};
