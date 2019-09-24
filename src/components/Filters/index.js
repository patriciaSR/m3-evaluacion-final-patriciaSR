import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Filters = ({ filterCharacters, species, filterSpecies, gender, genderSelected, filterGender, filterEpisodes }) => {

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
                onChange={filterGender}
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
              onChange={filterGender}
            />
            All
            </label>
        </div>
      </div>
      <div className="select">
        <label htmlFor="episodes" className="episodes__label">Nº de Episodios</label>
        <select id="episodes" name="episodes" onChange={filterEpisodes}>
          <option value="0"> All </option>
          <option value="5">5 o más</option>
          <option value="10">10 o más</option>
          <option value="20">20 o más</option>
          <option value="30">30 o más</option>
        </select>
      </div>
    </div >
  )
}

Filters.propTypes = {
  filterCharacters: PropTypes.func.isRequired
}

export default Filters;