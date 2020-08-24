import * as React from "react";
import styles from "./scroll-indicator.module.css";

export default function ScrollIndicator() {
  return (
    <div class={styles.container}>
      <div class={styles.indicator}></div>
    </div>
  );
}
