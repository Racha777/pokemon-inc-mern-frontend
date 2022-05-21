import {
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import { PokemonProvider } from './context/PokemonContext';
import PokemonLayout from './layouts/PokemonLayout';
import PokemonsCreate from './pages/pokemons/PokemonsCreate';
import PokemonsRead from './pages/pokemons/PokemonsRead';

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route path='/' element={<PokemonLayout />}>
          <Route path='/create-pokemon' element={<PokemonsCreate />} />
          <Route path='/update-pokemon' element={<h2>update-pokemon</h2>} />
          <Route index element={<PokemonsRead />} />
        </Route>
        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </PokemonProvider>
  );
}

export default App;
