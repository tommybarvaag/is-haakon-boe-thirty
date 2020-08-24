import * as React from "react";
import styles from "./scroll-indicator.module.css";

export default function ScrollIndicator() {
  return (
    <div className={styles.container}>
      <div className={styles.indicator}></div>
    </div>
  );
}
