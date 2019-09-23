import React from 'react';
import { Link } from 'react-router-dom';
import mrsMee from './../../images/mrs-mee.gif';
import './styles.scss';
import Loading from '../Loading';

const NoCharacter = () => (
  <>
    <p className="loading__text">Ese personaje no lo tenemos en el directorio </p>
    <img src={mrsMee} alt="mrs-Mee character" className="not-found__img" />
    <Link to="/" className="app__back">Volver al listado</Link>
  </>
);


const CharacterDetail = (props) => {
  const characterId = parseInt(props.routeData.match.params.id);
  const { characters, isFetching } = props;

  const selectedCharacter = characters.find(character => character.id === characterId);

  if (isFetching) {
    return <Loading />
  } else {
    if (characterId > characters.length || characterId < 0) {
      return (
        <NoCharacter />
      )
    }
  }


  const { image, name, status, species, origin, episode } = selectedCharacter;

  let statusIcons = {
    alive: ' fas fa-heart',
    dead: 'fas fa-skull',
    unknow: 'fas fa-question'
  };

  let selectedStatus;

  if (status === 'Alive') {
    selectedStatus = statusIcons.alive;
  } else if (status === 'Dead') {
    selectedStatus = statusIcons.dead;
  } else {
    selectedStatus = statusIcons.unknow;
  }


  const speciesIcons = {
    human: 'fas fa-male',
    alien: ' fab fa-reddit-alien'
  }

  const selectedSpecie = species === 'Human' ? speciesIcons.human : speciesIcons.alien;


  return (
    <div className="characterDetail__containter">
      <div className="characterCard__container">
        <Link to='/' className="app__back" >Volver</Link>
        <div className="characterDetail__card">
          <img src={image} alt={name} className="character__image" />
          <div className="character__data">
            <h2 className="character__name">{name}</h2>
            <p className="character__status">Status:
              <i className={`status__icon ${selectedStatus}`}> {status}</i>
            </p>
            <p className="character__species">Specie:
              <i className={`specie__icon ${selectedSpecie}`}> {species}</i>
            </p>
            <p className="character__origin">Origen: {origin.name}</p>
            <p className="character__episodes">Nº de Episodios en los que sale: {episode.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail;