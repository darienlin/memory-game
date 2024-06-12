import React, { useState, useEffect } from 'react';
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
  const [restart, restartGame] = useState(false);

  useEffect(() => { document.body.style.backgroundColor = '#FFD23F' }, [])

  const winLose = () => {
    if (lose)
      return (
        <>
          <h1>Game Over</h1>
          <div className='restart' onClick={() => {restartGame(!restart);setScore(0);setLose(false)}}>Restart</div>
        </>
      )

    else if (win)
      return (
        <>
          <h1>You won</h1>
          <div className='restart' onClick={() => {restartGame(!restart);setScore(0);setWin(false)}}>Restart</div>
        </>
      )

    else
      return (<h1>Pokeapi Memorization game</h1>)
  }

  if (score > highScore) {
    setHighScore(score)
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
        <DivRender userPokemon={userPokemon} setUserPokemon={setUserPokemon} score={score} setScore={setScore} win={win} setWin={setWin} lose={lose} setLose={setLose} restart={restart}/>
      </div>
    </div>

  )
}

export default App;