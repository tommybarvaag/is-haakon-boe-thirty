import * as React from "react";
import { useInterval } from "../hooks/useInterval";
import { getTimeToDeadline, leadingZero } from "../utils/dateUtils";
import styles from "./countdown.module.css";

export default function Countdown({
  deadlineDate = new Date(),
  onDeadlineReached = () => {},
  hideCountdownOnDeadlineReached
}) {
  const [deadlineReached, setDeadlineReached] = React.useState(false);
  const [timeToDeadline, setTimeToDeadline] = React.useState(getTimeToDeadline(deadlineDate));

  useInterval(
    () => {
      const timeLeft = getTimeToDeadline(deadlineDate);
      setTimeToDeadline(timeLeft);

      if (
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        setDeadlineReached(true);
      }
    },
    deadlineReached ? null : 1000
  );

  React.useEffect(() => {
    if (deadlineReached && onDeadlineReached) {
      onDeadlineReached(deadlineReached);
    }
  }, [deadlineReached]);

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
