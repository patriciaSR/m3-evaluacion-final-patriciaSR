import React from 'react';
import PropTypes from 'prop-types';
import './CharacterCard.scss';


const CharacterCard = ({ character }) => {
  const {
    image,
    name,
    species
  } = character;

  return (
    <div className="character__card">
      <img src={image} alt={name} className="character__image" />
      <div className="character__data">
        <h2 className="card__name">{name}</h2>
        <p className="character__species">{species}</p>
      </div>
    </div>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  })
}

export default CharacterCard;