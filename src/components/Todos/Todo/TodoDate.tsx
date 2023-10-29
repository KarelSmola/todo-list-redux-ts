import React from "react";
import { DateType } from "../../../types/type";

import styles from "./TodoDate.module.css";

type TodoDateProps = {
  date: DateType;
};

export const TodoDate = ({ date }: TodoDateProps) => {
  return (
    <div className={styles.date}>
      <p>{date.day}</p>
      <p>{date.month}</p>
      <p>{date.year}</p>
    </div>
  );
};
