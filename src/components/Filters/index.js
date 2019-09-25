import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Filters = ({ filterCharacters }) => {

  return (
    <div className="page__filters">
      <div className="filterByName">
        <label htmlFor="finder" className="finder__label"></label>
        <input type="text" name="filterName" className="finder__input" id="finder" onChange={filterCharacters} />
      </div>
      <div className="filterByType">
        <label htmlFor="finder" className="finder__label"></label>
        <input type="text" name="filterType" className="finder__input" id="finder" onChange={filterCharacters} />
      </div>

    </div>
  )
}

Filters.propTypes = {
  filterCharacters: PropTypes.func.isRequired
}

export default Filters;