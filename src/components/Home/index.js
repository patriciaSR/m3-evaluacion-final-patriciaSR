import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import CharacterList from '../CharacterList';

const Home = (props) => {
  const { data, filterByName, filterSpecies, filterLocations } = props;
  
  return (
    <>
      <Filters
        filterByName={filterByName}
        filterSpecies={filterSpecies}
        filterLocations={filterLocations}
        data={data}
      />

      <CharacterList data={data} />
    </>
  )
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
  filterCharacters: PropTypes.func.isRequired
}

export default Home;