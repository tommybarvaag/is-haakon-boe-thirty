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
          <div className={styles.text}>{timeToDeadline?.days === 1 ? "dag" : "dager"}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.value}>{timeToDeadline?.hours}</div>
          <div className={styles.text}>{timeToDeadline?.hours === 1 ? "time" : "timer"}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.value}>{timeToDeadline?.minutes}</div>
          <div className={styles.text}>{timeToDeadline?.minutes === 1 ? "minutt" : "minutter"}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.value}>{timeToDeadline?.seconds}</div>
          <div className={styles.text}>{timeToDeadline?.seconds === 1 ? "sekund" : "sekunder"}</div>
        </div>
      </div>
    );
  };

  return renderCountdown();
}
