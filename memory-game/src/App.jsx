import React, { useState, useEffect } from 'react';
import Card from './card/Card.jsx';
import DivRender from './divRender/DivRender.jsx'
import './App.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}


function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [userPokemon, setUserPokemon] = useState([]);
  const [lose, setLose] = useState(false)
  const [win, setWin] = useState(false)

  const winLose = () => {
    if(lose)
      return (<h1>Game Over</h1>)

    else if(win)
      return (<h1>You Won!</h1>)

    else
      return (<h1>Pokeapi Memorization game</h1>)
  }

  return (
    <div className='bodyContainer'>
      <div className='topBar'>
        {winLose()}
        <div className='score'>
          <div>Current Score: {score}</div>
          <div>High Score: {highScore}</div>
        </div>
      </div>
      <div className='card-container'>
        <DivRender userPokemon={userPokemon} setUserPokemon={setUserPokemon} score={score} setScore={setScore} win={win} setWin={setWin} lose={lose} setLose={setLose}/>
      </div>
    </div>

  )
}

export default App;