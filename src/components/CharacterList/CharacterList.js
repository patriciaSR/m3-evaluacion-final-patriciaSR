import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CharacterCard from './../CharacterCard/CharacterCard';
import './CharacterList.scss';

const CharacterList = ({ data }) => {
  const { characters, filterName } = data;

  return (
    <ul className="character__list">
      {characters
        .filter(character => filterName ? character.name.toLowerCase().includes(filterName) : true)
        .map(character => (
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