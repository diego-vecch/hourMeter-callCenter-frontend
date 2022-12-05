export const NavbarUser = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-3xl text-primary-focus">CallCenter</a>
        </div>
        <div className="flex-none">
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
        </div>
      </div>
    </>
  );
};
