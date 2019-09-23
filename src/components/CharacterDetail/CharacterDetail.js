import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterDetail.scss';
import mrsMee from './../../images/mrs-mee.gif';

const CharacterDetail = (props) => {
  const characterId = parseInt(props.routeData.match.params.id);
  const { characters, isFetching } = props;

  const selectedCharacter = characters.find(character => character.id === characterId);

  if (isFetching) {
    return <p className="loading__text">Cargando...</p>
  } else {
    if (characterId > characters.length || characterId < 0) {
      return (
        <>
          <p className="loading__text">Ese personaje no lo tenemos en el directorio </p>
          <img src={mrsMee} alt="mrs-Mee character" className="not-found__img"/>
          <Link to="/" className="app__back">Volver al listado</Link>
        </>
      )
    }
  }


  const { image, name, status, species, origin, episode } = selectedCharacter;

  return (
    <div className="characterDetail__containter">
      <div className="characterCard__container">
        <Link to='/' className="app__back" >Volver</Link>
        <div className="characterDetail__card">
          <img src={image} alt={name} className="character__image" />
          <div className="character__data">
            <h2 className="character__name">{name}</h2>
            <p className="character__status">Status:{status}</p>
            <p className="character__species">Species:{species}</p>
            <p className="character__origin">Origin:{origin.name}</p>
            <p className="character__episodes">Episodes:{episode.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail;