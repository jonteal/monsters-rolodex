import CardList from './components/CardList/CardList';
import { useEffect, useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';



const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  useEffect(() => {
    console.log(monsters);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase(); 
        setSearchField(searchFieldString);
      }

  return (
    <div className="App">

        <h1 className='app-title'>Monsters Rolodex</h1>
        
        <SearchBar 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters' 
          className='monsters search-box' 
        />

        <CardList monsters={filteredMonsters} />

    </div>
  )
}

export default App;
