import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({ filterCharacters }) => {

  return (
    <div className="page__filters">
      <label htmlFor="finder" className="finder__label"></label>
      <input type="text" className="finder__input" id="finder" onChange={filterCharacters} />
    </div>
  )
}

Filters.propTypes = {
  filterCharacters: PropTypes.func.isRequired
}

export default Filters;