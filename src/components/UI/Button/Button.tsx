import React, { ReactEventHandler, ReactNode } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  className: string;
  children: ReactNode;
  type: "button" | "submit";
};

export const Button = ({ className, type, children }: ButtonProps) => {
  return (
    <button type={type} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};
