import { useState } from 'react'
import { useEffect } from 'react';
import './card.css'
import axios from 'axios';


function fetchPokemon(x) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + x;
    return axios.get(url);
  }

function Card(props){
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
      // Fetch the Pokemon data and handle the promise
      fetchPokemon(props.idName)
        .then(response => {
          setPokemon(response.data);  // Update the state with the fetched data
        })
        .catch(error => {
          console.error('Error fetching Pokemon data:', error);  // Log any errors
        });
    }, []);  // Empty dependency array means this runs once after the initial render
  
    return (
      <div className='card' onClick={() => {props.onClick()}}>
        {pokemon ? (
          <div>
            <img src={pokemon.sprites['front_default']} />
            <p>{pokemon.name}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }

  export default Card