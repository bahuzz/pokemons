import React, {Component} from 'react';
import GetService from './services/getService';
import './App.scss';

import Pokemon from './components/pokemon';

export default class App extends Component {

  getService = new GetService();
  
  state = {
    pokemons: [],
    next: null,
    prev: null,
    limit: 20
  }

  componentDidMount() {
    this.getService.getPokemons(this.state.limit)
     .then(pokemons => { 
          this.setState({
            pokemons
          })
        })
  }

  render() {
    const list = this.state.pokemons.map(item => {
    return (<Pokemon key={item.name} item={item}></Pokemon>);
    })
    return (
      <div className="App">
          <div className="container">
            <div className="pokemons">
              {list}
            </div>
          </div>
      </div>
    );
  }
}
