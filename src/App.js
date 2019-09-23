import React from 'react';
import getCharacters from './services/getCharacters';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      filterName: ''
    }

    this.getCharactersArr = this.getCharactersArr.bind(this);
    this.filterCharacters = this.filterCharacters.bind(this);

  }

  getCharactersArr() {
    getCharacters().then(data => {
      this.setState({
        characters: data.results
      })
    })
  }

  filterCharacters(e) {
    const characterName = e.currentTarget.value.toLowerCase();

    this.setState({
      filterName: characterName
    })
  }

  componentDidMount() {
    this.getCharactersArr();
  }

  render() {
    return (
      <div className="app">
        <header className="page__header">
          <h1 className="page__title">Directorio de personajes de Rick y Morty</h1>
        </header>
        <div className="page__filters">
          <label htmlFor="finder" className="finder__label"></label>
          <input type="text" className="finder__input" id="finder" onChange={this.filterCharacters}/>
        </div>
        <ul className="character__list">
          {this.state.characters
          .filter(character => this.state.filterName ? character.name.toLowerCase().includes(this.state.filterName) : true)
          .map(character => (
            <li className="list__character" key={character.id} id={character.id}>
              <div className="character__card">
                <img src={character.image} alt={character.name} className="character__image" />
                <h2 className="card__name">{character.name}</h2>
                <p className="character__species">{character.species}</p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default App;
