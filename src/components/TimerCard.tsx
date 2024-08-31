import { SetStateAction, useEffect, useState } from "react";

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

interface TimerCardProps {
  setTimerDidEnd: React.Dispatch<SetStateAction<boolean>>;
}

export const TimerCard = ({ setTimerDidEnd }: TimerCardProps) => {
  const [timeLeft, setTimeLeft] = useState<Time>({
    hours: 1,
    minutes: 0,
    seconds: 9,
  });

  useEffect(() => {
    setTimeout(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({
          ...timeLeft,
          minutes: timeLeft.minutes - 1,
          seconds: 59,
        });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({ hours: timeLeft.hours - 1, minutes: 59, seconds: 59 });
      } else {
        setTimerDidEnd(true);
      }
    }, 1000);
  }, [timeLeft]);

  return (
    <div id="timer-card">
      {timeLeft.hours > 0 ? (
        <>
          <div className="flex-col">
            <h1 className="font-medium">{timeLeft.hours}</h1>
            <h3>Hours</h3>
          </div>
          <h1 className="font-regular">:</h1>
        </>
      ) : (
        <></>
      )}
      <div className="flex-col">
        <h1 className="font-medium">{timeLeft.minutes}</h1>
        <h3>Minutes</h3>
      </div>
      <h1 className="font-regular">:</h1>
      <div className="flex-col">
        <h1 className="font-medium">{timeLeft.seconds}</h1>
        <h3>Seconds</h3>
      </div>
    </div>
  );
};
