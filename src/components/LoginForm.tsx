import React from "react";

const LoginForm = () => {
  const loginChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log({ [name]: value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          onChange={loginChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="userPass">Password</label>
        <input
          type="text"
          id="userPass"
          name="userPass"
          onChange={loginChangeHandler}
        />
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
