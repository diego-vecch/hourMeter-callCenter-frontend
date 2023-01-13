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
      <div className=" bg-base-300 rounded-xl grid grid-cols-1 gap-0 mx-1 my-2 vy-sm:mx-11 vy-sm:mt-7 sm:mx-20 sm:my-12 md:grid-cols-2 md:my-12 md:mx-16 lg:my-24 lg:mx-20 xl:mx-48 ">
        <div>
          <SidebarUser />
        </div>
        <div>
          {mode === "none" && <Initiation setMode={setMode} />}
          {mode === "working" && <Working />}
        </div>
        <div className="md:col-span-2">
          <DateIcon />
        </div>
      </div>
    </>
  );
};
