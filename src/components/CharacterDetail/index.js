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


class CharacterDetail extends React.Component {
  constructor(props) {
    super(props);

    this.statusIcons = {
      alive: ' fas fa-heart',
      dead: 'fas fa-skull',
      unknown: 'fas fa-question'
    };

    this.speciesIcons = {
      human: 'fas fa-male',
      alien: ' fab fa-reddit-alien'
    }
  }

  getStatusIcon(status) {
    switch (status) {
      case 'Alive':
        return this.statusIcons.alive;
      case 'Dead':
        return this.statusIcons.dead;
      case 'unknown':
        return this.statusIcons.unknown;
        // deafult:
        // return this.statusIcons.unknown;
    }
  }

  render() {

    const characterId = parseInt(this.props.routeData.match.params.id);
    const { characters, isFetching } = this.props;

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

    const selectedSpecie = species === 'Human' ? this.speciesIcons.human : this.speciesIcons.alien;

    return (
      <div className="characterDetail__containter">
        <div className="characterCard__container">
          <Link to='/' className="app__back" >Volver</Link>
          <div className="characterDetail__card">
            <img src={image} alt={name} className="character__image" />
            <div className="character__data">
              <h2 className="character__name">{name}</h2>
              <p className="character__status">Status:
                <i className={`status__icon ${this.getStatusIcon(status)}`}> {status}</i>
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
}


export default CharacterDetail;