import React from "react";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="bg-base-300 rounded-xl grid grid-cols-1 gap-0 mx-1 my-2 vy-sm:mx-11 vy-sm:mt-7 sm:mx-20 sm:my-12  md:my-12 md:mx-16 lg:my-24 lg:mx-20 xl:mx-48 ">
      <LoginForm />
    </div>
  );
};
