import {
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import PokemonLayout from './layouts/PokemonLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PokemonLayout />}>
        <Route path='/create-pokemon' element={<h2>create-pokemon</h2>} />
        <Route path='/update-pokemon' element={<h2>update-pokemon</h2>} />
        <Route index element={<h2>Home</h2>} />
      </Route>
      <Route path='*' element={<h2>404</h2>} />
    </Routes>
  );
}

export default App;
