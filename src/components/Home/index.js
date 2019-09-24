import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import CharacterList from '../CharacterList';

const Home = (props) => {
  const { data, filterCharacters, filterSpecies, filterGender} = props;

  return (
    <>
      <Filters 
        filterCharacters={filterCharacters} 
        filterSpecies={filterSpecies} 
        filterGender={filterGender} 
        species={data.species} 
        gender={data.gender} 
        genderSelected={data.genderSelected}/>
      <CharacterList data={data} />
    </>
  )
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
  filterCharacters: PropTypes.func.isRequired
}

export default Home;