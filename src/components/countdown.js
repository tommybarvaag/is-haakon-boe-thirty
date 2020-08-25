import * as React from "react";
import { useCountdown } from "../utils/countdownProvider";
import styles from "./countdown.module.css";

export default function Countdown({ hideCountdownOnDeadlineReached }) {
  const { timeToDeadline, deadlineReached } = useCountdown();

  const renderCountdown = () => {
    if (hideCountdownOnDeadlineReached && deadlineReached) {
      return null;
    }

    return (
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.value}>{timeToDeadline?.days}</div>
          <div className={styles.text}>dager</div>
        </div>
        <div className={styles.item}>
          <div className={styles.value}>{timeToDeadline?.hours}</div>
          <div className={styles.text}>timer</div>
        </div>
        <div className={styles.item}>
          <div className={styles.value}>{timeToDeadline?.minutes}</div>
          <div className={styles.text}>minutter</div>
        </div>
        <div className={styles.item}>
          <div className={styles.value}>{timeToDeadline?.seconds}</div>
          <div className={styles.text}>sekunder</div>
        </div>
      </div>
    );
  };

  return renderCountdown();
}
