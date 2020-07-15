import React, { Component } from 'react';

import Header from './components/header';
import NewDish from './components/newDish';
import Dishes from './components/dishes';

import data from './assets/data/dishes.json';

import './styles/App.css';

class App extends Component {

  state = {
    dish: "tacos",
    //dishes: ["Tacos", "Ceviche", "Paella"]
    dishes: data
  }

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/platillos");
  };

  updateDish = (index, updatedName) => {
    let newState = {...this.state};
    newState.dishes.dishes[index].name = updatedName;

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
          <Header/>
          <NewDish></NewDish>
          {/* <Dish name={this.dish} qty="3" ></Dish> */}
          <Dishes data={this.state.dishes}
          onUpdateDish={this.updateDish}
          ></Dishes>
      </div>
    );
  }
  
}

export default App;
