import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { UserControlPanel } from "./pages/UserControlPanel";

export const AppRouting = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="user-control-panel" element={<UserControlPanel/>}/>
      </Routes>
    </div>
  );
};
