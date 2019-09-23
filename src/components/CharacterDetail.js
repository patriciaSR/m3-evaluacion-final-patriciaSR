import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  const characterId = parseInt(props.routeData.match.params.id);
  const { characters } = props;

  const selectedCharacter = characters.find(character => character.id === characterId);

  if (!selectedCharacter) {
      if(characterId > 20 || characterId < 0){
        return <p>Ese personaje no lo tenemos en el directorio :(</p>
      } else {
        return <p>Cargando...</p>
      }
  }

  const { image, name, status, species, origin, episode } = selectedCharacter;

  return (
    <>
      <Link to='/'> {`< Volver`} </Link>
      <div className="CharacterDetail__card">
        <img src={image} alt={name} className="character__image" />
        <div className="character__data">
          <h2 className="character__name">{name}</h2>
          <p className="character__status">Status:{status}</p>
          <p className="character__species">Species:{species}</p>
          <p className="character__origin">Origin:{origin.name}</p>
          <p className="character__episodes">Episodes:{episode.length}</p>
        </div>
      </div>
    </>
  )
}

export default CharacterDetail;