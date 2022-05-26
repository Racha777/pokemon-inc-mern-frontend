import { Outlet } from "react-router-dom";
import Footer from "../component/sections/Footer";
import Header from "../component/sections/Header";
import Loader from "../component/sections/Loader";
import usePokemons from "../hooks/usePokemons";

const PokemonsLayout = () => {
  const { loading } = usePokemons();

  const applicationName = "PokémonInc";

  const credits = {
    year: new Date().getFullYear(),
    author: 'ELGS'
  }

  return (
    <>
      {loading && <Loader />}
      <Header
        applicationName={applicationName}
      />
      <main className="text-center pt-16 pb-8">
        <Outlet />
      </main>
      <Footer
        credits={credits}
      />
    </>
  );
}

export default PokemonsLayout;