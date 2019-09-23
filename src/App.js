import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import Header from './components/Header';
import getCharacters from './services/getCharacters';
import './App.scss';
import Footer from './components/Footer';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      filterName: '',
      isFetching: true
    }

    this.getCharactersArr = this.getCharactersArr.bind(this);
    this.filterCharacters = this.filterCharacters.bind(this);
  }

  getCharactersArr() {
    getCharacters().then(data => {
      this.setState({
        characters: data.results,
        isFetching: false
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
    const { isFetching, characters } = this.state;
    return (
      <div className="app">
        <Header />

        <main className="page__main">
          {isFetching ? <p className="loading__text">Cargando...</p> :
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
