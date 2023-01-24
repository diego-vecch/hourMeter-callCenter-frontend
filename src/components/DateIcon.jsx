import { useEffect, useState } from "react";
export const DateIcon = () => {
  let [fecha, setFecha] = useState(Date());
  useEffect(() => {
    setInterval(() => setFecha(new Date().toLocaleDateString())), 1000;
  }, [fecha]);

  return (
    <>
      <div className="px-2 pb-0 mb-1 md:px-1 md:mb-4 text-xs md:text-base text-center">{fecha}</div>
    </>
  );
};
