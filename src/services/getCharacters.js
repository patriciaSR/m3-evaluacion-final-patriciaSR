const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const getCharacters = () => {
  return fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(character => {
        character.gender = character.gender.toLowerCase();
        character.species = character.species.toLowerCase();
        character.status = character.status.toLowerCase();
      });

      return data;
    });
}

export default getCharacters;