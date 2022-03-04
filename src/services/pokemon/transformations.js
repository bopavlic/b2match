import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

export const transformToPokemonDetails = (response) => {
  //destructuring
  const [moves] = response.moves;
  const { move } = moves;

  return {
    image_url: response.sprites.front_default,
    name: capitalizeFirstLetter(response.name),
    weight: response.weight,
    height: response.height,
    favorite_attack: move.name,
  };
};
