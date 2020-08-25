import * as React from "react";
import styles from "./scroll-snap.module.css";

export default function ScrollSnap({ children }) {
  return (
    <div className={styles.container}>
      {React.Children.map(children, (child, index) => (
        <section key={`scroll-snap-section-child-${index}`} className={styles.section}>
          {child}
        </section>
      ))}
    </div>
  );
}
