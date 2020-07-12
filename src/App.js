import React, { Component } from 'react';
import Header from './components/header';
import Dish from './components/dish';
import NewDish from './components/newDish';

import './styles/App.css';
import './styles/dish.css';

class App extends Component {

  dish = "tacos";

  render() {
    return (
      <div className="App">
          <Header/>
          <NewDish></NewDish>
          <Dish name={this.dish} qty="3" ></Dish>
      </div>
    );
  }
  
}

export default App;
