import { useState, useEffect } from 'react';
import './PokemonDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { initialPokemonDetails } from './consts';
import { fetchPokemonDetails } from '../../../services/pokemon/api';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemonDetails, setPokemonDetails] = useState(initialPokemonDetails);
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
  }, [id]);

  return (
    <div className='pokemonDetails'>
      {!isLoading ? (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={pokemonDetails.image_url} />
          <Card.Body>
            <Card.Title>{pokemonDetails.name} :)</Card.Title>
            <Card.Text>
              {`Hello my Pokemon friend! My name is ${pokemonDetails.name} nice to meet you.
               Let me in introduce myself. My favorite attack is ${pokemonDetails.favorite_attack},
               weight: ${pokemonDetails.weight} and height: ${pokemonDetails.height}.`}
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
