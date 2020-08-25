export const getTimeToDeadline = deadlineDate => {
  const time = deadlineDate - Date.parse(new Date());

  if (time < 0) {
    return {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0
    };
  }

  return {
    seconds: Math.floor((time / 1000) % 60),
    minutes: Math.floor((time / 1000 / 60) % 60),
    hours: Math.floor((time / (1000 * 60 * 60)) % 24),
    days: Math.floor(time / (1000 * 60 * 60 * 24))
  };
};
