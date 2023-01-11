import { Navbar } from "./Navbar";

export const Initiation = ({setMode}) => {
  return (
    <>
  
      <div className="container mx-auto w-full h-72 card bg-base-300 shadow-xl pt-4">
      <Navbar/>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Bienvenido usuario</h2>
          <p className="pt-8">Total de horas trabajadas</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={() => setMode("working")}>Iniciar Jornada</button>
          </div>
        </div>
      </div>
    </>
  );
};
