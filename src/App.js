import React from 'react';
import Home from './components/Home';
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
        <main className="page__main">
          <Home
            data={this.state}
            filterCharacters={this.filterCharacters}
          />
        </main>
      </div>
    );
  }
}

export default App;
