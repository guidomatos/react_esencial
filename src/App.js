import React from 'react';
import Header from './components/header';
import Dish, { Flag, Ingredient } from './components/dish';

import './styles/App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Dish></Dish>
        <Flag></Flag>
    </div>
  );
}

export default App;
