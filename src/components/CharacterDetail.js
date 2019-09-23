import React from 'react';

const CharacterDetail = (props) => {
  const characterId = parseInt(props.routeData.match.params.id);

  return(
    <div className="CharacterDetail__card">
      {characterId}
    </div>
  )
}

export default CharacterDetail;