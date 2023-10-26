import { useSelector } from "react-redux";

import { LoginForm } from "./components/LoginForm/LoginForm";
import { Header } from "./components/Header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { selectedUserLogin } from "./store/login/selectors";

const App = () => {
  const loggedUser = useSelector(selectedUserLogin);
  const { userIsLogged } = loggedUser;
  return (
    <div>
      {!userIsLogged && <LoginForm />}
      {userIsLogged && (
        <>
          <Header />
          <TodoForm />
          <TodoList />
        </>
      )}
    </div>
  );
};

export default App;
