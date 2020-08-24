import * as React from "react";
import styles from "./heading.module.css";

export default function Heading({ children, ...other }) {
  return (
    <h1 class={styles.heading1} {...other}>
      {children}
    </h1>
  );
}
