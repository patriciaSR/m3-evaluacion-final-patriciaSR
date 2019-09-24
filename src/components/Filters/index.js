import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Filters = ({ filterByName, filterSpecies, filterLocations, data }) => {
  const {species, gender, filterGender, origin, locations } = data;
  return (
    <div className="page__filters">
      <div className="finder">
        <label htmlFor="finder" className="finder__label"></label>
        <input type="text" name="filterName" className="finder__input" id="finder" onChange={filterByName} />
      </div>
      <div className="checkbox">
        {species.map((specie, index) => (
          <label htmlFor={`species-${index}`} key={index}>
            <input
              id={`species-${index}`}
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
            <label htmlFor={`gender-${index}`}>
              <input
                id={`gender-${index}`}
                type="radio"
                value={gender}
                name="filterGender"
                checked={filterGender === gender}
                onChange={filterByName}
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
              name="filterGender"
              checked={filterGender === "all"}
              onChange={filterByName}
            />
            All
            </label>
        </div>
      </div>
      <div className="select">
        <label htmlFor="episodes" className="episodes__label">Nº de Episodios</label>
        <select id="episodes" name="filterEpisodes" onChange={filterByName}>
          <option value="0"> All </option>
          <option value="5">5 o más</option>
          <option value="10">10 o más</option>
          <option value="20">20 o más</option>
          <option value="30">30 o más</option>
        </select>
      </div>

      <div className="select">
        <label htmlFor="origin" className="episodes__label">Origen</label>
        <select id="origin" name="filterOrigin" onChange={filterByName}>
          <option value="all"> All </option>
          {origin.map((origin, index) => <option key={index} value={origin}>{origin}</option>)}
        </select>
      </div>

      <div className="checkbox">
        {locations.map((location, index) => (
          <label htmlFor={`locations-${index}`} key={index}>
            <input
              id={`locations-${index}`}
              type="checkbox"
              value={location}
              name="specieOptions"
              onChange={filterLocations}
            />
            {location}
          </label>
        ))}
      </div>


    </div >
  )
}

Filters.propTypes = {
  filterCharacters: PropTypes.func.isRequired
}

export default Filters;