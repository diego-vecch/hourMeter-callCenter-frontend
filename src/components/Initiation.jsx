import Button from "./Button";

export const Initiation = ({ setMode }) => {
  return (
    <>
      <div className="bg-base-300 border-2 rounded border-blue-900 m-2 px-10 vy-sm:mt-4 vy-sm:mx-4 vy-sm:w-auto sm:my-2 sm:mx-10 md:h-60 md:mr-8 md:ml-2 md:mt-8 lg:h-60 lg:my-10 lg:mr-12 lg:ml-4  ">
        <div className="card-body items-center text-center">
          <h2 className="text-sm md:text-lg">Bienvenido usuario</h2>
          <p className="pt-5 pb-2 text-xs w-20 md:pt-5 md:text-sm md:w-36">
            Total de horas trabajadas
          </p>
          <div className="card-actions py-4 md:py-2">
            <Button onClick={() => setMode("working")}>Iniciar</Button>
          </div>
        </div>
      </div>
    </>
  );
};
