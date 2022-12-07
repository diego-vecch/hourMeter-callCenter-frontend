import { DateIcon } from "../components/DateIcon";
import { Initiation } from "../components/Initiation";
import { NavbarUser } from "../components/NavbarUser";
import { Working } from "../components/Working";
import { useEffect, useState } from "react";

export const UserControlPanel = () => {
  const [mode, setMode] = useState("none");

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  return (
    <>
      <NavbarUser />
      <DateIcon />
      {mode === "none" && <Initiation setMode={setMode} />}
      {mode === "working" && <Working/>}
    </>
  );
};
