import React from 'react';
import './App.scss';
import getCharacters from './services/getCharacters';

class App extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    characters: []
  }

  this.getCharactersArr = this.getCharactersArr.bind(this);
}

getCharactersArr() {
  getCharacters().then(data => {
    this.setState({
      characters: data
    })
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
          <input type="text" className="finder__input" id="finder" />
        </div>
        <ul className="character__list">
          <li className="list__character">Ricky</li>
        </ul>

      </div>
    );
  }
}

export default App;
