import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { fetchPokemons } from '../../services/pokemon/api';
import './PokemonList.css';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getPokemonId = (string) => {
    const splitted = string.split('/');
    const id = splitted[splitted.length - 2];
    return id;
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await fetchPokemons();
        setPokemonList(result);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className='pokemonList'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>More info</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading
            ? pokemonList &&
              pokemonList.results.map((pokemon, index) => (
                <tr key={index}>
                  <td>{getPokemonId(pokemon.url)}</td>
                  <td>{pokemon.name}</td>
                  <td>
                    <Button>Click me</Button>
                  </td>
                </tr>
              ))
            : 'loading...'}
        </tbody>
      </Table>
    </div>
  );
};

export default PokemonList;
