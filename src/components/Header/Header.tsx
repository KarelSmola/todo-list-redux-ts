import React from "react";
import { useSelector } from "react-redux";
import { selectedUserLogin } from "../../store/login/selectors";

export const Header = () => {
  const user = useSelector(selectedUserLogin);

  return (
    <header>
      <p>Hello {user.userName}</p>
    </header>
  );
};
