import { DateIcon } from "../components/DateIcon";
import { Initiation } from "../components/Initiation";
import { Working } from "../components/Working";
import { useEffect, useState } from "react";
import { SidebarUser } from "../components/SidebarUser";

export const UserControlPanel = () => {
  const [mode, setMode] = useState("none");

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  return (
    <>
      <div className="m-4 sm:my-10  md:my-32 md:mx-36 grid md:grid-cols-2 gap-4 bg-base-300 rounded-xl">
        <div class=" ">
          <SidebarUser />
        </div>
        <div class="">
          {mode === "none" && <Initiation setMode={setMode} />}
          {mode === "working" && <Working />}
        </div>
        <DateIcon />
      </div>
    </>
  );
};
