import React, { useState, useEffect } from 'react';
import Card from '../card/Card.jsx';
import '../card/card.css'

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1; // +1 to avoid 0 index if using API IDs
}

function DivRender() {
    const [pokemonId, setPokemonId] = useState([]);

    // Initialize Pokémon IDs on component mount
    useEffect(() => {
        let initialPokemonIds = [];
        while (initialPokemonIds.length < 5) {
            let num = getRandomInt(100);
            if (!initialPokemonIds.includes(num)) {
                initialPokemonIds.push(num);
            }
        }
        setPokemonId(initialPokemonIds);
    }, []);

    // Function to shuffle and re-render Pokémon divs
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

    // Generate divs based on shuffled Pokémon IDs
    const renderDivs = () => {
        const divs = [];
        for (let index = 0; index < pokemonId.length; index++) {
          divs.push(<Card idName={pokemonId[index]} key={pokemonId[index]} onClick={shuffleAndRender} />);
        }
        //divs.push(<div key={6}>{pokemonId}</div>)
        return divs;
    };

    return (
        <>
            {renderDivs()}
        </>
    );
}

export default DivRender;
