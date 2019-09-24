import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import CharacterList from '../CharacterList';

const Home = (props) => {
  const { data, filterCharacters, filterSpecies } = props;

  return (
    <>
      <Filters filterCharacters={filterCharacters} filterSpecies={filterSpecies} species={data.species} />
      <CharacterList data={data} />
    </>
  )
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
  filterCharacters: PropTypes.func.isRequired
}

export default Home;