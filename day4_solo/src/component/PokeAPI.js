import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';

const PokeAPI = () => {

    const [pokeDatas, setPokeDatas] = useState([]);

    useEffect(() => {
        let url;

        function fetchPoke(){
            url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';
            return fetch(url).then(function(response){
                return response.json();
            });
        };

        async function getPoke() {
            const response = await fetchPoke();
            console.log(response.results[0].name);  
            setPokeDatas(response.results);
            console.log(pokeDatas);
        };

        getPoke();

    }, [])

    const pokeName = pokeDatas.map(pokeData => 
        <li key={pokeData.name}>
            {pokeData.name}
        </li>
    )

    return (
        <>
            <ul>
                {pokeName}
            </ul>
        </>
    )
}

export default PokeAPI;
