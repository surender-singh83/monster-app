import React, {Component} from 'react';
import './monsters-style.css';
import { CardList } from '../card-list/card-list-component';
import { SearchBox } from '../search-box/searchBox-component';

class Monsters extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  render(){
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
    <div className="content-box">
        <SearchBox 
          placeholder='Search here'
          handleChange={e => this.setState({searchField:e.target.value})}
          />
        <CardList monsters={filterdMonsters} />
    </div>
  );
  }
}

export { Monsters }