import { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export const Timer = ({ time }) => {
  const [startTime, setStartTime] = useState(time ? time : 0);
  const [counterTime, setCounterTime] = useState(0);

  useEffect(() => {
    if (startTime !== 0) {
      const interval = setInterval(
        () => setCounterTime(Date.now() - startTime),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [startTime]);

  return (
    <div className="flex gap-2">
      {Object.entries({
        Horas: (counterTime / HOUR) % 24,
        Minutos: (counterTime / MINUTE) % 60,
        Segundos: (counterTime / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className="">
          <div className="w-20 text-center">
            <p className="text-4xl">
              {`${Math.floor(value)}`.padStart(2, "0")}
            </p>
            <span className="text-xs">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
