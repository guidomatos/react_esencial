import React, { Component } from 'react';
import Header from './components/header';
import Dish from './components/dish';
import NewDish from './components/newDish';
import Button from '@material-ui/core/Button';

import './styles/App.css';
import './styles/dish.css';

class App extends Component {

  dish = "tacos";

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/platillos");
  };

  render() {
    return (
      <div className="App">
          <Header/>
          <NewDish></NewDish>
          {/* <Dish name={this.dish} qty="3" ></Dish> */}
          <Button variant="contained" color="secondary" onClick={this.showDishes}>
            Elegir
          </Button>
      </div>
    );
  }
  
}

export default App;
