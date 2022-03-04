import { useState, useEffect } from 'react';
import './PokemonDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { initialPokemonDetails } from './consts';
import { fetchPokemonDetails } from '../../../services/pokemon/api';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../../helpers/capitalizeFirstLetter';

const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemonDetails, setPokemonDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await fetchPokemonDetails(id);
        setPokemonDetails(result);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    })();
  }, []);

  console.log('pokemonDetails: ', pokemonDetails);

  return (
    <div className='pokemonDetails'>
      {!isLoading ? (
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            src={pokemonDetails && pokemonDetails.sprites.front_default}
          />
          <Card.Body>
            <Card.Title>
              {capitalizeFirstLetter(
                pokemonDetails && pokemonDetails.species.name
              )}
            </Card.Title>
            <Card.Text>
              {`Hello my Pokemon friend! My name is ${capitalizeFirstLetter(
                pokemonDetails && pokemonDetails.species.name
              )} nice to meet you. My weight is ${
                pokemonDetails && pokemonDetails.weight
              } and my height is  ${pokemonDetails && pokemonDetails.height}.`}
            </Card.Text>
            <Button onClick={() => navigate(-1)} variant='dark'>
              Go back
            </Button>
          </Card.Body>
        </Card>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default PokemonDetails;
