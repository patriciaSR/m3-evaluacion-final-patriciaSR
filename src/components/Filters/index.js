import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Filters = ({ filterCharacters, species, filterSpecies }) => {

  return (
    <div className="page__filters">
      <div className="finder">
        <label htmlFor="finder" className="finder__label"></label>
        <input type="text" className="finder__input" id="finder" onChange={filterCharacters} />
      </div>
      <div className="checkbox">
        {species.map((specie, index) => (
          <label htmlFor="option1" key={index}>
            <input
              id="option1"
              type="checkbox"
              value={specie}
              name="specieOptions"
              onChange={filterSpecies}
            />
            {specie}
          </label>
        ))}
      </div>
    </div>
  )
}

Filters.propTypes = {
  filterCharacters: PropTypes.func.isRequired
}

export default Filters;