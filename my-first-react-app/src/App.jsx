import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Card from './card/Card.jsx'
import axios from 'axios';


function fetchPokemon(x) {
  const url = 'https://pokeapi.co/api/v2/pokemon/' + x;
  return axios.get(url);
}

function App() {
  return (
    <div className='bodyContainer'>
      <div className='topBar'>
        <h1>Pokeapi Guessing game</h1>
        <div className='score'>
          <div>Current Score</div>
          <div>High Score</div>
        </div>
      </div>
      <div className='card-container'>
        <Card id={2} />
        <Card id={3} />
        <Card id={4} />
        <Card id={23} />
        <Card id={102} />

      </div>
    </div>

  )
}

export default App;