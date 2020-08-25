import * as React from "react";
import { useInterval } from "../hooks/useInterval";
import { getTimeToDeadline } from "./dateUtils";

const CountdownContext = React.createContext();

export default function CountdownProvider({ deadlineDate = new Date(), ...other }) {
  const [timeToDeadline, setTimeToDeadline] = React.useState(getTimeToDeadline(deadlineDate));
  const initialTimeLeft = getTimeToDeadline(deadlineDate);
  const [deadlineReached, setDeadlineReached] = React.useState(
    initialTimeLeft.days === 0 &&
      initialTimeLeft.hours === 0 &&
      initialTimeLeft.minutes === 0 &&
      initialTimeLeft.seconds === 0
  );

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

  return (
    <CountdownContext.Provider
      value={{
        timeToDeadline,
        deadlineReached
      }}
      {...other}
    />
  );
}

const useCountdown = () => React.useContext(CountdownContext);

export { CountdownProvider, useCountdown };
