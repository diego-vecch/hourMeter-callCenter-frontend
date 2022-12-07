import React from "react";
import { Navbar } from "../components/Navbar";

export const ManagerAdminPanel = () => {
  return (
    <div className="container mx-auto h-screen">
      <Navbar />
      <div className="h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-4 text-2xl">
        Buscar jornadas trabajadas por:
        <div className="flex gap-2">
          <button className="btn">Usuario</button>
          <button className="btn">Todas</button>
        </div>
      </div>
    </div>
  );
};