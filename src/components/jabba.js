import * as React from "react";
import styles from "./jabba.module.css";

export default function Jabba({ ...other }) {
  return (
    <div className={styles.container} {...other}>
      <img className={styles.image} src="/images/haakon-boe-bw.png" alt="Jabba the Hutt" />
    </div>
  );
}
