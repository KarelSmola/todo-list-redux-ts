import { useSelector } from "react-redux";
import { selectedUserLogin } from "../../store/login/selectors";
import { selectedTodos } from "../../store/todo/todoSelectors";

import { Button } from "../UI/Button/Button";
import styles from "./Header.module.css";
import { LogoutIcon, UserIcon } from "../UI/Icons";

export const Header = () => {
  const user = useSelector(selectedUserLogin);
  const todos = useSelector(selectedTodos);
  const todoTodos = todos.length === 1 ? "todo" : "todos";

  return (
    <header className={styles.header}>
      <div>
        <h1>Todo list</h1>
      </div>
      <div>
        <h2>
          Hello {user.userName} you have {todos.length} {todoTodos}
        </h2>
      </div>
      <div className={styles["user-box"]}>
        <div className={styles["user-box-name"]}>
          <UserIcon />
          <p>{user.userName}</p>
        </div>
        <Button className={styles["logout-btn"]}>
          <span>Logout</span> <LogoutIcon />
        </Button>
      </div>
    </header>
  );
};
