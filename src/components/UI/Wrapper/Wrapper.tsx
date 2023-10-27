import React, { ReactNode } from "react";

import styles from "./Wrapper.module.css";

type WrapperProps = { children: ReactNode };

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
