import { useSelector, useDispatch } from "react-redux";
import { selectedUserLogin } from "../../store/login/selectors";
import { selectedTodos } from "../../store/todo/todoSelectors";
import { logoutUser } from "../../store/login/loginSlice";
import { removeAllTodos } from "../../store/todo/todoSlice";

import { Button } from "../UI/Button/Button";
import styles from "./Header.module.css";
import { LogoutIcon, UserIcon } from "../UI/Icons";

export const Header = () => {
  const user = useSelector(selectedUserLogin);
  const todos = useSelector(selectedTodos);
  const todosAmount: number = todos.length;
  const todoTodos = todosAmount === 1 ? "todo" : "todos";

  const dispatch = useDispatch();

  const headerClasses = (todos: number) => {
    if (todos > 3 && todos <= 5) {
      return `${styles.header} ${styles.neutral}`;
    } else if (todos > 5) {
      return `${styles.header} ${styles.attention}`;
    } else {
      return styles.header;
    }
  };

  const logout = () => {
    dispatch(logoutUser());
    dispatch(removeAllTodos());
  };

  return (
    <header className={headerClasses(todosAmount)}>
      <div>
        <h1>Todo list</h1>
      </div>
      <div>
        <h2 className={styles["user-greeting"]}>
          Hello {user.userName} you have {todos.length} {todoTodos}
        </h2>
      </div>
      <div className={styles["user-box"]}>
        <div className={styles["user-box-name"]}>
          <UserIcon />
          <p>{user.userName}</p>
        </div>
        <Button className={styles["logout-btn"]} onClick={logout}>
          <span>Logout</span> <LogoutIcon />
        </Button>
      </div>
    </header>
  );
};
