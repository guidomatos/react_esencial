import React, { Component } from 'react';
import Header from './components/header';
import Dish, { Flag, Ingredient } from './components/dish';

import './styles/App.css';
import './styles/dish.css';

class App extends Component {

  dish = "tacos";

  render() {
    return (
      <div className="App">
          <Header/>
          <Dish name={this.dish} qty="3" ></Dish>
      </div>
    );
  }
  
}

export default App;
