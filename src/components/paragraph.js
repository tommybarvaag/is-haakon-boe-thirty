import * as React from "react";
import styles from "./paragraph.module.css";

export default function Paragraph({ children, ...other }) {
  return (
    <p class={styles.paragraph} {...other}>
      {children}
    </p>
  );
}
