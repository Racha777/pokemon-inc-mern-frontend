import { Toaster } from 'react-hot-toast';
import {
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import { PokemonsProvider } from './context/PokemonsContext';
import PokemonsLayout from './layouts/PokemonsLayout';
import PokemonsCreate from './pages/pokemons/PokemonsCreate';
import PokemonsRead from './pages/pokemons/PokemonsRead';
import PokemonsUpdate from './pages/pokemons/PokemonsUpdate';

function App() {
  return (
    <PokemonsProvider>
      <Toaster />
      <Routes>
        <Route path='/' element={<PokemonsLayout />}>
          <Route path='create-pokemon' element={<PokemonsCreate />} />
          <Route path='update-pokemon/:id' element={<PokemonsUpdate />} />
          <Route index element={<PokemonsRead />} />
        </Route>
        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </PokemonsProvider>
  );
}

export default App;
