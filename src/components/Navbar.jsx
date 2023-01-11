import { useLocation } from "react-router-dom";

export const Navbar = () => {
  let location = useLocation().pathname;
  console.log(location);

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-3xl text-primary-focus">CallCenter</a>
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
        {location=== "/user-control-panel" && (
          <ul className="menu menu-horizontal p-0 text-base-content">
          <li className="hover:bg-neutral-content">
            <a >Panel de control</a>
          </li>
          <li className="hover:bg-neutral-content">
            <a>Panel de administración</a>
          </li>
          <li>
            <a>Nombre de usuario</a>
          </li>
        </ul>
        )}
      </div>
    </div>
  );
};
