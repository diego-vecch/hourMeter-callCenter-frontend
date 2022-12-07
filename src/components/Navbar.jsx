import { useLocation } from "react-router-dom";

export const Navbar = () => {
  let location = useLocation().pathname;
  console.log(location);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">CallCenter</a>
      </div>
      <div className="navbar-end gap-2">
        {location === "/" && (
          <>
            <button className="btn">Registro* </button>
            <a className="pl-2"> (*solo para administradores)</a>
          </>
        )}
        {location === "/manager-admin-panel" && (
          <>
            <button className="btn">Panel de Administracion</button>
            <div className="avatar rounded-full h-10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                alt="user"
              />
            </div>
            <button className="">Usuario</button>
          </>
        )}
      </div>
    </div>
  );
};
