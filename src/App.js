import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Classes always run the constructor class first. The only thing you'll do with the constructor 
  // is initialize the state.

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor');
  }

  // Runs right after the UI component mounts with the render method. This happens third.
  componentDidMount() {
    console.log('component did mount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return {monsters: users}
      },
      () => {
        console.log(this.state);
      }
    )
    );
  }

  // The render runs second and it determines what to show on the browser. Renders/ mounts the initial UI.
  render() {
    console.log('render');
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input 
          className='search-box' 
          type="search" 
          placeholder='search monsters' 
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            
            this.setState(() => {
              return { searchField }
            })
          }} 
        />
        {
          filteredMonsters.map((monster) => {
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
