import PokemonsCard from "../../component/pokemons/PokemonsCard";
import usePokemon from "../../hooks/usePokemon";

const PokemonsRead = () => {

  const { pokemons } = usePokemon();

  return (
    <section className="py-8">
      <div className="flex flex-col gap-8 container mx-auto px-8 md:px-4">
        <h2 className="text-3xl text-yellow-400 font-bold">Pokémons ({pokemons.length})</h2>
        <div className="grid justify-items-center md:grid-cols-3 gap-8">
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