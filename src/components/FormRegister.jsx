import { useState } from "react";

export default function FormRegister() {

  const [name, setName]=useState("");
  const [lastName, setLastName]=useState("");
  const [password, setPassword]=useState("");
  const [mail, setMail]=useState("");

  fetch("http://localhost:8080/")

  return (
    <div className="container mx-auto max-w-md py-14 xl:pt-8 xl:pb-12 xl:h-screen 2xl:py-40">
      <form className=" card bg-base-300 border-2 rounded-3xl border-blue-900">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl mt-6 mb-7 md:mt-2 md:mb-5 ">
            Registro del administrador
          </h2>
          <label className="px-2 w-80 sm:text-left">Nombre</label>
          <input
            type="text"
            name="text"
            placeholder="Nombre"
            autoComplete="off"
            className="input input-bordered input-primary w-full max-w-xs"
            value={name} onChange={e=> setName(e.target.value)} 
          />
          <label className="px-2 w-80 sm:text-left" >Apellido</label>
          <input
            type="text"
            name="text"
            placeholder="Apellido"
            autoComplete="off"
            className="input input-bordered input-primary w-full max-w-xs"
            value={lastName}
            onChange={e=> setLastName(e.target.value)} 
          />
          <label className="px-2 w-80 sm:text-left" >Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="input input-bordered input-primary w-full max-w-xs"
            value={password}
            onChange={e=> setPassword(e.target.value)} 
          />
          <label className="px-2 w-80 sm:text-left" >Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs"
            value={mail}
            onChange={e=> setMail(e.target.value)}
          />
          <div className="card-actions mt-6">
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
