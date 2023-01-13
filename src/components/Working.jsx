import { Timer } from "./Timer";

export const Working = () => {
  return (
    <div className="bg-base-300 border-2 rounded border-blue-900 justify-center items-center m-2 px-2 vy-sm:mt-4 vy-sm:mx-4 vy-sm:w-auto sm:my-2 sm:mx-10 sm:px-10 md:h-60 md:mr-8 md:ml-2 md:mt-8 md:px-6 lg:h-60 lg:my-10 lg:mr-12 lg:ml-4">
      <h2 className="text-2xl mt-7 mb-8 mx-10 text-center ">Trabajando</h2>
      <Timer time={Date.now()} />
      <div className="flex gap-2 mt-4">
        <button class="bg-slate-800 w-28 h-10 text-sm">DESCANSO</button>
        <button class="bg-slate-800 w-40 text-sm">Finalizar Jornada</button>
      </div>
    </div>
  );
};
