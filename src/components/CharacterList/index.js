import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CharacterCard from '../CharacterCard';
import noResultImg from '../../images/no-results.gif';
import './styles.scss';


const NoResults = () => (
  <>
    <p className="no-results__text">Lo siento, no hay resultados para esa búsqueda</p>
    <img src={noResultImg} alt="" className="no-results__image" />
  </>
);

const CharacterList = ({ data, favSelect, favs }) => {
  const { characters, filterName, filteredSpecies, filterGender, filterEpisodes, filterOrigin, filteredLocations } = data;

  const filteredCharacters = characters.filter(
    character => filterName ? character.name.toLowerCase().includes(filterName) : true
  )
  .filter(character => filteredSpecies[0] ? filteredSpecies.includes(character.species) : true)
  .filter(character => filterGender !== 'all' ? character.gender === filterGender : true)
  .filter(character => filterEpisodes ? character.episode.length >= filterEpisodes : true)
  .filter(character => filterOrigin !== 'all' ? character.origin.name.toLowerCase() === filterOrigin.toLowerCase() : true)
  .filter(character => filteredLocations[0] ? filteredLocations.includes(character.location.name) : true)

  
  if (!filteredCharacters.length) {
    return (
      <NoResults />
    );
  }

  return (
    <ol className="character__list">
      {filteredCharacters.map(character => (
        <li className={`list__character ${favs.find(fav => fav.id === character.id) && 'red'}`} key={character.id} id={character.id}>
          <i class="fas fa-heart" onClick={() => favSelect(character)}></i>
          <Link to={`/character/${character.id}`} className="character__link" >
            <CharacterCard character={character}/>
          </Link>
        </li>
      ))}
    </ol>
  )
}

CharacterList.propTypes = {
  data: PropTypes.shape({
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    filterName: PropTypes.string
  })
}

export default CharacterList;