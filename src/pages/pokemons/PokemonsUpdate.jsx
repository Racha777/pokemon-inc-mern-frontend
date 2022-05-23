import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PokemonsForm from "../../component/pokemons/PokemonsForm";
import usePokemon from "../../hooks/usePokemon";

const PokemonsUpdate = () => {
  const { id } = useParams();
  const { readPokemon } = usePokemon();

  useEffect(() => {
    readPokemon(id);
  }, []);

  return (
    <section>
      <h2>PokemonsUpdate</h2>
      <PokemonsForm />
    </section>
  );
}

export default PokemonsUpdate;