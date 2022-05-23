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
      console.log(error.response.data.message);
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
      console.log(error.response.data.message);
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
      console.log(error.response.data.message);
    }
  };

  const updatePokemon = async (pokemon) => {
    try {
      pokemon.image = {
        publicId: 0,
        url: pokemon.image
      };
      const options = {
        method: 'PUT',
        data: pokemon,
        url: `${process.env.REACT_APP_API_URL}/pokemons/${pokemon._id}`
      };
      const { data } = await axios(options);
      setPokemons(pokemons.map((pokemon) => {
        return pokemon._id === data._id ? data : pokemon;
      }));
      setPokemon({});
      navigate('/');
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const deletePokemon = async (_id) => {
    try {
      const options = {
        method: 'DELETE',
        url: `${process.env.REACT_APP_API_URL}/pokemons/${_id}`
      };
      const { data } = await axios(options);
      setPokemons(pokemons.filter((pokemon) => {
        return pokemon._id !== _id;
      }));
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const submitPokemonsForm = (pokemon) => {
    if (pokemon._id === undefined) {
      createPokemon(pokemon);
    } else {
      updatePokemon(pokemon);
    }
  };

  useEffect(() => {
    readPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        pokemons,
        setPokemons,
        submitPokemonsForm,
        readPokemon,
        deletePokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};