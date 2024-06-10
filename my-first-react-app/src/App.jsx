import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import axios from 'axios';


function fetchPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
  return axios.get(url);
}

function App() {
  const [pokemon, setPokemon] = useState(null);  // State to store the fetched Pokemon data

  // Use useEffect to handle side-effects (like fetching data)
  useEffect(() => {
    // Fetch the Pokemon data and handle the promise
    fetchPokemon()
      .then(response => {
        setPokemon(response.data);  // Update the state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);  // Log any errors
      });
  }, []);  // Empty dependency array means this runs once after the initial render

  return (
    <div>
      <h1>Pokemon Info</h1>
      {pokemon ? (
        <div>
          <p>Name: {pokemon.name}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;