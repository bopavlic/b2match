import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchPokemons } from '../../../services/pokemon/api';
import { initialPokemon } from './consts';
import './PokemonList.css';
import { capitalizeFirstLetter } from '../../../helpers/capitalizeFirstLetter';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState(initialPokemon);
  const [isLoading, setIsLoading] = useState(false);

  const getPokemonId = (string) => {
    const splitted = string.split('/');
    const id = splitted[splitted.length - 2];
    return id;
  };

  //fetch pokemon list with pokemons
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
          {!isLoading ? (
            pokemonList.results.map((pokemon, index) => (
              <tr key={index}>
                <td>{getPokemonId(pokemon.url)}</td>
                <td>{capitalizeFirstLetter(pokemon.name)}</td>
                <td>
                  <Link to={`/pokemon/${getPokemonId(pokemon.url)}`}>
                    <Button variant='dark'>Click me!</Button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='3'>Loading...</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default PokemonList;
