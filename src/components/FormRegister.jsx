export default function FormRegister() {
  return (
    <div className="container mx-auto max-w-md py-24">
      <form className=" card bg-base-300 border-4 border-cyan-50">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl mt-6 mb-7">
            Registro del administrador
          </h2>
          <p>Nombre y Apellido</p>
          <input
            type="text"
            name="text"
            placeholder="nombre y apellido"
            autoComplete="off"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <p className="pt-4">Contraseña</p>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <p className="pt-4">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs"
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
