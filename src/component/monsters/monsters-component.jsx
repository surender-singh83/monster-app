import React, {Component} from 'react';
import './monsters-style.css';
import { CardList } from '../card-list/card-list-component';
import { SearchBox } from '../search-box/searchBox-component';
import PageComponent from '../common/pageComponent';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../loader/loader';

class Monsters extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      isLoader: false,
      searchField: ''
    }
    
  }
 
  
  componentDidMount(){
    this.setState({isLoader: true})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users, isLoader: false}));

    
}
  render(){
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
    <PageComponent title="Mosters Page">
      {localStorage.getItem('auth-token') || this.props.user.isLogged ? (
        this.state.isLoader ? (
          <Loader />
          ) : (

           
            <div>
            
            <SearchBox 
              placeholder='Search here'
              handleChange={e => this.setState({searchField:e.target.value})}
              />
            <CardList monsters={filterdMonsters} />
            </div>
          )
        
     
      ) : (<Redirect to="/" />) }
    </PageComponent>
  );
  }
}
const mapStateToProps = state => {
  return {
    user: state
  }
}


export default connect(mapStateToProps)(Monsters)
