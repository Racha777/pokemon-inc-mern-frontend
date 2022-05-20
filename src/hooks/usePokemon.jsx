import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const usePokemon = () => {
  const context = useContext(PokemonContext);
  return (context);
}

export default usePokemon;