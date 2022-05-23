import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {

  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);

  const createPokemon = async (pokemon) => {
    try {
      pokemon.image = {
        url: pokemon.image
      };
      const options = {
        method: 'POST',
        data: pokemon,
        url: `${process.env.REACT_APP_API_URL}/pokemons`
      };
      const { data } = await axios(options);
      setPokemons([
        ...pokemons,
        data
      ]);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const readPokemons = async () => {
    try {
      const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/pokemons`
      };
      const { data } = await axios(options);
      setPokemons(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const readPokemon = async (_id) => {
    try {
      const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/pokemons/${_id}`
      };
      const { data } = await axios(options);
      setPokemon(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    console.log('Hola');
    readPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        pokemons,
        setPokemons,
        createPokemon,
        readPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};