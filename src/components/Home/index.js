import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import CharacterList from '../CharacterList';

const Home = (props) => {
  const { data, filterCharacters } = props;

  return (
    <>
      <Filters filterCharacters={filterCharacters} />
      <CharacterList data={data} />
    </>
  )
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
  filterCharacters: PropTypes.func.isRequired
}

export default Home;