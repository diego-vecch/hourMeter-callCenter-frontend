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
        className="card bg-base-100 shadow-xl "
      >
        <div className="card-body items-center text-center">
          <h2 className="card-title mt-6 mb-7">Ingreso</h2>
          <p>Nombre de usuario</p>
          <input
            type="text"
            name="user"
            placeholder="Usuario"
            value={user}
            autoComplete="off"
            onChange={(ev) => setUser(ev.target.value)}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <p className="pt-4">Contraseña</p>
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
  if (user === 'user' && password === 'callcenter')
    alert("inicio de sesión");
  else alert("Usuario y/o Contraseña incorrecta");
};
