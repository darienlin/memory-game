import React, { useState, useEffect } from 'react';
import Card from '../card/Card.jsx';
import '../card/card.css'

var pokeAmt = 10

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function DivRender(props) {
    const [pokemonId, setPokemonId] = useState([]);

    function addUserPokemon(x){
        if(props.userPokemon.includes(x)){
            props.setLose(true)
        }
        else{
            let tempPoke = props.userPokemon
            tempPoke.push(x)
            props.setUserPokemon(tempPoke);
            props.setScore(props.score + 1);

            if(props.score == 4)
                props.setWin(true)
        }

    }

    // Initialize pokemon ids on component mount
    useEffect(() => {
        let initialPokemonIds = [];
        while (initialPokemonIds.length < pokeAmt) {
            let num = getRandomInt(100);
            if (!initialPokemonIds.includes(num)) {
                initialPokemonIds.push(num);
            }
        }
        setPokemonId(initialPokemonIds);
    }, [props.restart]);

    // Function to shuffle and re-render pokemon divs
    const shuffleAndRender = () => {
        let shuffledIds = [...pokemonId];
        for (let i = shuffledIds.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledIds[i], shuffledIds[j]] = [shuffledIds[j], shuffledIds[i]];
        }
        setPokemonId(shuffledIds);
        //console.log(pokemonId)
        //console.log(renderDivs())
    };

    // Generate divs based on shuffled pokemon ids
    const renderDivs = () => {
        const divs = [];
        for (let index = 0; index < pokemonId.length; index++) {
          divs.push(<Card idName={pokemonId[index]} key={pokemonId[index]} onClick={() => {shuffleAndRender();addUserPokemon(pokemonId[index])}} />);
        }
        return divs;
    };

    return (
        <>
            {renderDivs()}
        </>
    );
}

export default DivRender;
