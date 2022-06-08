import { Component } from 'react';
import CardList from './components/CardList/CardList';

import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {

  // Classes always run the constructor class first. The only thing you'll do with the constructor 
  // is initialize the state.

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // Runs right after the UI component mounts with the render method. This happens third.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return {monsters: users}
      }
    )
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase(); 
    this.setState(() => {
      return { searchField }
    })
  }

  // The render runs second and it determines what to show on the browser. Renders/ mounts the initial UI.
  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        
        <SearchBar 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters' 
          className='monsters search-box' 
        />
        
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
