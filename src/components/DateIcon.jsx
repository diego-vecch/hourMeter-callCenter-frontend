import { useEffect, useState } from "react";
export const DateIcon = () => {
  let [fecha, setFecha] = useState(Date());
  useEffect(() => {
    setInterval(() => setFecha(Date())), 1000;
  }, [fecha]);

  return (
    <>
      <div className="p-2 float-right">{fecha}</div>
    </>
  );
};
