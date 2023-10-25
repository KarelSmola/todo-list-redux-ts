import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { Header } from "./components/Header/Header";
import { TodoList } from "./components/TodoList/TodoList";

const App = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <TodoList />
    </div>
  );
};

export default App;
