import React from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

export const Button = ({ className, type, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
