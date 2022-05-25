import { Outlet } from "react-router-dom";
import Header from "../component/sections/Header";

const PokemonLayout = () => {
  const applicationName = "PokémonInc";
  return (
    <>
      <Header
        applicationName={applicationName}
      />
      <main className="text-center pt-24 pb-8">
        <Outlet />
      </main>
      <footer className="text-center mt-auto">ELGS</footer>
    </>
  );
}

export default PokemonLayout;