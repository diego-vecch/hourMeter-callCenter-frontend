import React from "react";
import { LoginForm } from "../components/LoginForm";
import { Navbar } from "../components/Navbar";

export const LoginPage = () => {
  return (
    <div className="container mx-auto w-full h-screen">
      <Navbar />
      <LoginForm />
    </div>
  );
};
