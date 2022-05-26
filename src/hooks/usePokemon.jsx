import { useContext } from 'react';
import { PokemonsContext } from '../context/PokemonsContext';

const usePokemon = () => {
  const context = useContext(PokemonsContext);
  return (context);
}

export default usePokemon;