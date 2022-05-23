import {
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import { PokemonProvider } from './context/PokemonContext';
import PokemonLayout from './layouts/PokemonLayout';
import PokemonsCreate from './pages/pokemons/PokemonsCreate';
import PokemonsRead from './pages/pokemons/PokemonsRead';
import PokemonsUpdate from './pages/pokemons/PokemonsUpdate';

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route path='/' element={<PokemonLayout />}>
          <Route path='create-pokemon' element={<PokemonsCreate />} />
          <Route path='update-pokemon/:id' element={<PokemonsUpdate />} />
          <Route index element={<PokemonsRead />} />
        </Route>
        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </PokemonProvider>
  );
}

export default App;
