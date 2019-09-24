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
      isFetching: true,
      species: [],
      origin: 'all',
      filterName: '',
      filterGender: 'all',
      filteredSpecies: [],
      filterOrigin: 'all',
      filteredLocations: [],
      favs: []
    }

    this.getCharactersArr = this.getCharactersArr.bind(this);
    this.getCharacterInfoByKey = this.getCharacterInfoByKey.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.filterSpecies = this.filterSpecies.bind(this);
    this.filterLocations = this.filterLocations.bind(this);
    this.favSelect = this.favSelect.bind(this);

  }

  getCharactersArr() {
    getCharacters().then(data => {
      this.setState({
        characters: data.results,
        isFetching: false,
        species: this.getCharacterInfoByKey(data.results, 'species'),
        gender: this.getCharacterInfoByKey(data.results, 'gender'),
        origin: this.getCharacterSubInfoByKey(data.results, 'origin'),
        locations: this.getCharacterSubInfoByKey(data.results, 'location'),
        filterGender: 'all'

      });
    })
  }
  getCharacterInfoByKey(data, key) {
    const infoArr = data.map(character => character[key]);
    const infoSet = new Set(infoArr);
    const uniqInfoArr = [...infoSet];

    return uniqInfoArr;
  }
  getCharacterSubInfoByKey(data, key) {
    const infoArr = data.map(character => character[key].name);
    const infoSet = new Set(infoArr);
    const uniqInfoArr = [...infoSet];

    return uniqInfoArr;
  }

  //  Otra forma de filtrar un array
  //   return data.reduce((acc, character) => {
  //     if (!acc.includes(character.species)) {
  //       acc.push(character.species);
  //     }
  //     return acc;
  //   }, []);
  // }

  filterByName(e) {
    let value = e.currentTarget.value.toLowerCase();
    const name = e.currentTarget.name;
    if (name === 'episodes') {
      value = parseInt(value)
    }
    this.setState({
      [name]: value
    })
  }

  filterSpecies(e) {
    const specieValue = e.currentTarget.value;
    const newSpeciesArr = [...this.state.filteredSpecies];
    const specieIndex = newSpeciesArr.findIndex(specie => specie === specieValue);
    if (specieIndex < 0) {
      newSpeciesArr.push(specieValue);
    } else {
      newSpeciesArr.splice(specieIndex, 1);
    }
    return (
      this.setState({
        filteredSpecies: newSpeciesArr
      })
    )
  }
  filterLocations(e) {
    const locationValue = e.currentTarget.value;
    const newLocationsArr = [...this.state.filteredLocations];
    const locationIndex = newLocationsArr.findIndex(location => location === locationValue);
    if (locationIndex < 0) {
      newLocationsArr.push(locationValue);
    } else {
      newLocationsArr.splice(locationIndex, 1);
    }
    return (
      this.setState({
        filteredLocations: newLocationsArr
      })
    )
  }

  favSelect(character) {
    const prevFavs = [...this.state.favs];
    const charIndex = prevFavs.findIndex(char => char.id === character.id)
    if (charIndex < 0) {
      prevFavs.push(character);
    } else {
      prevFavs.splice(charIndex, 1);
    }
    this.setState({
      favs: prevFavs
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
          {isFetching ? <Loading /> :
            <Switch>
              <Route exact path="/" render={() => (
                <Home
                  data={this.state}
                  filterByName={this.filterByName}
                  filterSpecies={this.filterSpecies}
                  filterLocations={this.filterLocations}
                  favSelect={this.favSelect}
                />
              )}
              />
              <Route path="/character/:id" render={(props) => (
                <CharacterDetail
                  characters={characters}
                  isFetching={isFetching}
                  routeData={props}
                />
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

// // otra forma de hacer un filter de objetos anidados key: 'a.b.c'
// function get(object, key) {
//   const props = key.split('.');

//   return props.reduce((currentObject, nextKey) => {
//     if (currentObject) {
//       const value = currentObject[nextKey];

//       return value;
//     }
//   }, object);
// }