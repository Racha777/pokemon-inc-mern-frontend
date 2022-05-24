import { Link } from "react-router-dom";
import PokemonsCard from "../../component/pokemons/PokemonsCard";
import usePokemon from "../../hooks/usePokemon";

const PokemonsRead = () => {

  const { pokemons } = usePokemon();

  return (
    <section>
      <div className="flex flex-col gap-4 container mx-auto">
        <div className="flex justify-between">
          <h2>Pokémons ({pokemons.length})</h2>
          <Link to='create-pokemon'>Crear Pokémon</Link>
        </div>
        <div className="grid justify-center md:grid-cols-4 gap-8">
          {
            pokemons.map((pokemon) => {
              return (
                <PokemonsCard
                  key={pokemon._id}
                  pokemon={pokemon}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default PokemonsRead;