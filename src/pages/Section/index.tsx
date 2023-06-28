import React, { ReactNode, FC } from "react";
import * as styles from "./styles.css";

export const RegularSection: FC<{ children: ReactNode }> = ({ children }) => (
  <section className={styles.section}>{children}</section>
);
