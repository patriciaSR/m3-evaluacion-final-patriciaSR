import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import getCharacters from './services/getCharacters';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      filterName: '',
      isFetching: true,
      species: []
    }

    this.getCharactersArr = this.getCharactersArr.bind(this);
    this.filterCharacters = this.filterCharacters.bind(this);
    this.getSpecies = this.getSpecies.bind(this);
  }

  getCharactersArr() {
    getCharacters().then(data => {
      this.setState({
        characters: data.results,
        isFetching: false,
        species: this.getSpecies(data.results)
      });
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

  getSpecies(data) {
    return data.reduce((acc, character) => {
      if (!acc.includes(character.species)) {
        acc.push(character.species);
      }
      return acc;
    }, []);
  }

  render() {
    const { isFetching, characters } = this.state;
    return (
      <div className="app">
        <Header />

        <main className="page__main">
          {isFetching ? <Loading /> :
            <Switch>
              <Route exact path="/" render={() => (
                <Home
                  data={this.state}
                  filterCharacters={this.filterCharacters}
                />
              )}
              />
              <Route path="/character/:id" render={(props) => (
                <CharacterDetail
                  characters={characters}
                  isFetching={isFetching}
                  routeData={props} />
              )}
              />
            </Switch>
          }
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
