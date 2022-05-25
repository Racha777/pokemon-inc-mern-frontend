import { NavLink } from "react-router-dom";

const Header = ({ applicationName }) => {
  return (
    <header className="fixed z-80 top-0 left-0 w-full bg-zinc-800 shadow shadow-zinc-500/50">
      <nav className="py-4">
        <div className="flex items-center justify-between container mx-auto px-8 md:px-4">
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "text-cyan-300 text-2xl font-black transition-colors" : "text-2xl font-black transition-colors hover:text-cyan-300"
            }
          >
            {applicationName}
          </NavLink>
          <ul className="flex">
            <li className="flex">
              <NavLink
                to="create-pokemon"
                className={({ isActive }) =>
                  isActive ? "bg-cyan-300 text-black rounded-xl text-xl font-bold px-2 transition-colors" : "rounded-xl text-xl font-bold px-2 transition-colors hover:bg-cyan-300 hover:text-black"
                }
              >
                Crear
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;