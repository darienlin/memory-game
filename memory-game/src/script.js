const axios = require("axios");

let request = 'https://pokeapi.co/api/v2/'

function fetchPokemon(){
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    return axios.get(url);
}



