import React, { useState, useEffect } from 'react';
import Card from './card/Card.jsx';
import DivRender from './divRender/DivRender.jsx'
import './App.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1; // +1 to avoid 0 index if using API IDs
}


function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div className='bodyContainer'>
      <div className='topBar'>
        <h1>Pokeapi Guessing game</h1>
        <div className='score'>
          <div>Current Score: {score}</div>
          <div>High Score: {highScore}</div>
        </div>
      </div>
      <div className='card-container'>
        <DivRender/>
      </div>
    </div>

  )
}

export default App;