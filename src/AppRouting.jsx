import React from "react";
import { Route, Routes } from "react-router-dom";
import { ManagerAdminPanel } from "./pages/ManagerAdminPanel";
import { LoginPage } from "./pages/LoginPage";
import { UserControlPanel } from "./pages/UserControlPanel";
import RegisterPage from "./pages/RegisterPage";

export const AppRouting = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="user-control-panel" element={<UserControlPanel/>}/>
        <Route path="manager-admin-panel" element={<ManagerAdminPanel/>}/>
        <Route path="register-page" element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
};
