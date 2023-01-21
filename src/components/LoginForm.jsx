import React, { useState } from "react";
export const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          login(user, password);
        }}
        className="card bg-base-300 shadow-xl "
      >
        <div className="card-body items-center text-center">
          <div className="font-bold  text-primary-focus  ml-2 mt-1 mb-1 vy-sm:text-2xl sm:pb-1 md:pb-1 md:text-2xl lg:ml-6 lg:text-4xl ">
            CallCenter
          </div>
          <h2 className="card-title mt-2 mb-5">Ingreso</h2>
          <label className="px-2 w-80 sm:text-left">Nombre de usuario</label>
          <input
            type="text"
            name="user"
            placeholder="Usuario"
            value={user}
            autoComplete="off"
            onChange={(ev) => setUser(ev.target.value)}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <label className="px-2 w-80 sm:text-left">Constraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <div className="card-actions mt-6">
            <button type="submit" className="btn btn-primary">
              Inciar Sesión
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const login = (user, password) => {
  if (user === "user" && password === "callcenter") alert("inicio de sesión");
  else alert("Usuario y/o Contraseña incorrecta");
};
