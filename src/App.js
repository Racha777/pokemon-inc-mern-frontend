import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import { PokemonProvider } from './context/PokemonContext';
import PokemonLayout from './layouts/PokemonLayout';
import PokemonsCreate from './pages/pokemons/PokemonsCreate';

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route path='/' element={<PokemonLayout />}>
          <Route path='/create-pokemon' element={<PokemonsCreate />} />
          <Route path='/update-pokemon' element={<h2>update-pokemon</h2>} />
          <Route index element={
            <div>
              <h2>Home</h2>
              <Link to='create-pokemon'>Crear Pokémon</Link>
            </div>
          } />
        </Route>
        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </PokemonProvider>
  );
}

export default App;
