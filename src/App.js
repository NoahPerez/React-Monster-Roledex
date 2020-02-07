import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = { // state changes because of user interaction 
      monsters: [],
      searchField: '' // we add searchField to be able to store 
    };

    // this.handleChange = this.handleChange.bind(this); 
  }

  //life cycle methods 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // converts response to a json: response.json
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state; // deconstructor // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Roledex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange} // We write it like {this.handleChange} because we are passing the all call back 
        />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}




export default App;
