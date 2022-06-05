import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [  
        {
          name: 'Linda',
          id: '17383'
        },
        {
          name: 'Frank',
          id: '749373'
        },
        {
          name: 'Jacky',
          id: '84927'
        },
        {
          name: 'Andre',
          id: '383048'
        }
      ]
      
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
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
