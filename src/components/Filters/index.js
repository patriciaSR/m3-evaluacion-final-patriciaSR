import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Filters = ({ filterCharacters, species, filterSpecies, gender, genderSelected, filterGender }) => {

  return (
    <div className="page__filters">
      <div className="finder">
        <label htmlFor="finder" className="finder__label"></label>
        <input type="text" className="finder__input" id="finder" onChange={filterCharacters} />
      </div>
      <div className="checkbox1">
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
      <div className="radio">
        {gender.map((gender, index) => (
          <div key={index}>
            <label htmlFor={`option-${index}`}>
              <input
                id={`option-${index}`}
                type="radio"
                value={gender}
                name={gender}
                checked={genderSelected === gender}
                onClick={filterGender}
              />
              {gender}
            </label>
          </div>
        ))}
        <div>
          <label htmlFor="option-all">
            <input
              id="option-all"
              type="radio"
              value="all"
              name="all"
              checked={genderSelected === "all"}
              onClick={filterGender}
            />
            All
            </label>
        </div>
      </div>
    </div >
  )
}

Filters.propTypes = {
  filterCharacters: PropTypes.func.isRequired
}

export default Filters;