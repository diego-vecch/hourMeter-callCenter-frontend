import { Timer } from "./Timer";

export const Working = () => {
  return (
    <div className="container mx-auto w-full h-72 card bg-base-200 shadow-xl pt-4 justify-center items-center">
      <h2 className="text-2xl mb-4">Trabajando</h2>
      <Timer time={Date.now()} />
      <div className="flex gap-2 mt-4">
        <button class="btn">Descanso</button>
        <button class="btn">Finalizar Jornada</button>
      </div>
    </div>
  );
};
