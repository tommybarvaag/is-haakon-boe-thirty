import * as React from "react";
import styles from "./container.module.css";

export default function Container({ children, ...other }) {
  return (
    <div class={styles.container} {...other}>
      {children}
    </div>
  );
}
