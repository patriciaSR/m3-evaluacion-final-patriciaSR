import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CharacterCard from '../CharacterCard';
import noResultImg from '../../images/no-results.gif';
import './styles.scss';


const NoCharacters = () => (
  <>
    <p className="no-results__text">Lo siento, no hay resultados para esa búsqueda</p>
    <img src={noResultImg} alt="" className="no-results__image" />
  </>
);

const CharacterList = ({ data }) => {
  const { characters, filterName } = data;
  const filteredCharacters = characters.filter(
    character => filterName ? character.name.toLowerCase().includes(filterName) : true
  );

  if (!filteredCharacters.length) {
    return (
      <NoCharacters />
    );
  }

  return (
    <ul className="character__list">
      {filteredCharacters.map(character => (
        <li className="list__character" key={character.id} id={character.id}>
          <Link to={`/character/${character.id}`} className="character__link" >
            <CharacterCard character={character} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

CharacterList.propTypes = {
  data: PropTypes.shape({
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    filterName: PropTypes.string
  })
}

export default CharacterList;