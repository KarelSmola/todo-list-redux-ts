import { useSelector } from "react-redux";

import { Wrapper } from "./components/UI/Wrapper/Wrapper";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Header } from "./components/Header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { selectedUserLogin } from "./store/login/selectors";

const App = () => {
  const loggedUser = useSelector(selectedUserLogin);
  const { userIsLogged } = loggedUser;

  return (
    <Wrapper>
      {!userIsLogged && <LoginForm />}
      {userIsLogged && (
        <>
          <Header />
          <TodoForm />
          <TodoList />
        </>
      )}
    </Wrapper>
  );
};

export default App;
