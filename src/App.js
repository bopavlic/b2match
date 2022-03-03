import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/NavBar';
import PokemonList from './components/pokemon/PokemonList';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <PokemonList />
    </div>
  );
};

export default App;
