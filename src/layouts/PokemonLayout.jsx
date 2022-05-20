import { Link, Outlet } from "react-router-dom";

const PokemonLayout = () => {
  return (
    <>
      <header className="text-center">
        <Link to="/">PokémonInc</Link>
      </header>
      <main className="text-center">
        <Outlet />
      </main>
      <footer className="text-center">ELGS</footer>
    </>
  );
}

export default PokemonLayout;