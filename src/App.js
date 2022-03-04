import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/NavBar';
import PokemonList from './components/pokemon/pokemonList/PokemonList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonDetails from './components/pokemon/pokemonDetails/PokemonDetails';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<PokemonList />} />
          <Route path='/pokemon/:id' element={<PokemonDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
