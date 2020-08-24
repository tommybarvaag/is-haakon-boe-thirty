import * as React from "react";
import { useCountdown } from "../utils/countdownProvider";
import { leadingZero } from "../utils/dateUtils";
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
          <div className={styles.value}>{leadingZero(timeToDeadline?.days)}</div>
          <div className={styles.text}>dager</div>
        </div>
        <div className={styles.item}>
          <div className={styles.value}>{leadingZero(timeToDeadline?.hours)}</div>
          <div className={styles.text}>timer</div>
        </div>
        <div className={styles.item}>
          <div className={styles.value}>{leadingZero(timeToDeadline?.minutes)}</div>
          <div className={styles.text}>minutter</div>
        </div>
        <div className={styles.item}>
          <div className={styles.value}>{leadingZero(timeToDeadline?.seconds)}</div>
          <div className={styles.text}>sekunder</div>
        </div>
      </div>
    );
  };

  return renderCountdown();
}
