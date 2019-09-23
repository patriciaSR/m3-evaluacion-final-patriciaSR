const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const getCharacters = () => {
  return fetch(ENDPOINT).then(response => response.json())
}

export default getCharacters;