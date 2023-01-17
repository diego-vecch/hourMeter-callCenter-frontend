import { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export const Timer = ({ time }) => {
  const [startTime, setStartTime] = useState(time);
  const [counterTime, setCounterTime] = useState(0);

  useEffect(() => {
    if (startTime !== 0) {
      setInterval(() => setCounterTime(Date.now() - startTime), 1000);
    }
  }, [startTime]);

  return (
    <div className="grid grid-cols-3 gap-0 vy-sm:gap-2">
      {Object.entries({
        Horas: (counterTime / HOUR) % 24,
        Minutos: (counterTime / MINUTE) % 60,
        Segundos: (counterTime / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label}>
          <div className="ml-0 lg:ml-4 w-16 text-center ">
            <div className="text-xl vy-sm:text-4xl ">
              {`${Math.floor(value)}`.padStart(2, "0")}
            </div>
            <span className="text-xs">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
