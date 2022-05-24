import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../utils/reactHotToast';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {

  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);

  const createPokemon = async (pokemon) => {
    try {
      // pokemon.image = {
      //   url: pokemon.image
      // };
      const form = new FormData();
      for (let key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        // data: pokemon,
        data: form,
        url: `${process.env.REACT_APP_API_URL}/pokemons`
      };
      const { data } = await axios(options);
      setPokemons([
        ...pokemons,
        data
      ]);
      showToast('✅', 'Creado');
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
      showToast('📚', 'Leídos');
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
      showToast('📚', 'Leído');
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const updatePokemon = async (pokemon) => {
    try {
      // pokemon.image = {
      //   publicId: 0,
      //   url: pokemon.image
      // };
      const form = new FormData();
      for (let key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        // data: pokemon,
        data: form,
        url: `${process.env.REACT_APP_API_URL}/pokemons/${pokemon._id}`
      };
      const { data } = await axios(options);
      setPokemons(pokemons.map((pokemon) => {
        return pokemon._id === data._id ? data : pokemon;
      }));
      setPokemon({});
      showToast('❗', 'Actualizado');
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
      showToast('❌', data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const submitPokemonsForm = async (pokemon) => {
    if (pokemon._id === undefined) {
      await createPokemon(pokemon);
    } else {
      await updatePokemon(pokemon);
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