import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import './App.scss';
import Monsters from './component/monsters/monsters-component';
import Home from './component/home/Home-component';
import AboutUs from './component/aboutus/about-component';
import MonsterDetail from './component/monster-detail/monster-detail';
import NavBar from './component/navbar/navbar-component';
import { Route, BrowserRouter as Router } from 'react-router-dom';


class App extends Component{
  render(){
    return (
    <div className="App">
      <Router>
          <NavBar />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/monster" component={Monsters} />
            <Route path="/about" component={AboutUs} />
            <Route path="/monsters-detail/:id" component={MonsterDetail} />
            {/* <Route path="/contact" component={Contact} /> */} 
          </div>
        </Router>
         {/* <SearchBox 
          placeholder='Search here'
          handleChange={e => this.setState({searchField:e.target.value})}
          />
        <CardList monsters={filterdMonsters} /> */}
    </div>
  );
  }
}

export default App;
