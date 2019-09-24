import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import CharacterList from '../CharacterList';

const Home = (props) => {
  const { data, filterByName, filterSpecies, filterLocations, favSelect } = props;
  
  return (
    <>
      <Filters
        filterByName={filterByName}
        filterSpecies={filterSpecies}
        filterLocations={filterLocations}
        data={data}
      />

      <CharacterList data={data} favSelect={favSelect} favs={data.favs}/>
    </>
  )
}

Home.propTypes = {
  data: PropTypes.object.isRequired
}

export default Home;