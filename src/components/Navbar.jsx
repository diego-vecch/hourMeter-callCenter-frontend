export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">CallCenter</a>
      </div>
      <div className="navbar-end">
        <button className="btn">Registro* </button>
        <a className="pl-2"> (*solo para administradores)</a>
      </div>
    </div>
  );
};
