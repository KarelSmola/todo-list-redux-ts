import React, { ReactNode } from "react";

import styles from "./Wrapper.module.css";

type WrapperProps = { children: ReactNode };

export const Wrapper = ({ children }: WrapperProps) => {
  return <main className={styles.wrapper}>{children}</main>;
};
