import React from "react";

import styles from "./Input.module.css";

type InputProps = {
  className?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const Input = ({
  className,
  type,
  placeholder,
  id,
  name,
  onBlur,
  onChange,
  value,
}: InputProps) => {
  return (
    <input
      className={`${styles.input} ${className}`}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  );
};
