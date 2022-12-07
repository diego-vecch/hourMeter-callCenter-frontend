import { DateIcon } from "../components/DateIcon";
import { Initiation } from "../components/Initiation";
import { Working } from "../components/Working";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

export const UserControlPanel = () => {
  const [mode, setMode] = useState("none");

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  return (
    <>
      <Navbar />
      <DateIcon />
      {mode === "none" && <Initiation setMode={setMode} />}
      {mode === "working" && <Working />}
    </>
  );
};
