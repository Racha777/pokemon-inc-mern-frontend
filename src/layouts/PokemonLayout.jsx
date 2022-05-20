import { Outlet } from "react-router-dom";

const PokemonLayout = () => {
  return (
    <>
      <header className="text-center">PokémonInc</header>
      <main className="text-center">
        <Outlet />
      </main>
      <footer className="text-center">ELGS</footer>
    </>
  );
}

export default PokemonLayout;