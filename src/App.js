import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Header from './components/Header/Header';
import getCharacters from './services/getCharacters';
import './App.scss';
import Footer from './components/Footer/Footer';

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
        <Header />

        <main className="page__main">
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
                characters={this.state.characters}
                routeData={props} />
            )}
            />
          </Switch>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
