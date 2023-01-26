import { useEffect, useState, useRef } from "react";

import { Timer } from "./Timer";

export const Working = () => {
  const [counterTime, setCounterTime] = useState(0);
  const timerIdRef = useRef();
  const isMounted = useRef(false);
  const [isResting, setIsResting] = useState (false)

  const handleContinueClick = () =>{
    setIsResting(false);
    const startTime = Date.now();
    timerIdRef.current = setInterval(() => {
      setCounterTime(Date.now() - startTime + counterTime);
    }, 1000);
  }

  const handleRestClick = () => {
    clearInterval(timerIdRef.current);
    setIsResting(true);
  };

  useEffect(() => {
    if (isMounted.current) {
      return;
    }
    isMounted.current = true;
    const startTime = Date.now();
    timerIdRef.current = setInterval(() => {
      setCounterTime(Date.now() - startTime);
    }, 1000);
  }, []);

  return (
    <div className="bg-base-300 border-2 rounded border-blue-900 justify-center items-center m-2 px-2 vy-sm:mt-4 vy-sm:mx-4 vy-sm:w-auto sm:my-2 sm:mx-10 sm:px-10 md:h-60 md:mr-8 md:ml-2 md:mt-8 md:px-6 lg:h-60 lg:my-10 lg:mr-12 lg:ml-4">
      <h2 className="text-2xl mt-7 mb-8 mx-10 text-center ">Trabajando</h2>
      <Timer counterTime={counterTime} />
      <div className="flex gap-2 mt-4">
        {!isResting && (
          <button
            onClick={handleRestClick}
            className="bg-slate-800 w-28 h-10 text-sm"
          >
            Descanso
          </button>
        )}
        {isResting && (
          <button onClick={handleContinueClick} className="bg-slate-800 w-28 h-10 text-sm">Retomar</button>
        )}
        <button className="bg-slate-800 w-40 text-sm">Finalizar Jornada</button>
      </div>
    </div>
  );
};
