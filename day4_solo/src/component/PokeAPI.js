import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';

const PokeAPI = () => {

    const [pokeDatas, setPokeDatas] = useState([]);

    useEffect(() => {
        let url;

        function fetchPoke(){
            url = 'https://pokeapi.co/api/v2/type/3';
            return fetch(url).then(function(response){
                return response.json();
            }).catch(() => {
                console.log('주소를 찾을수 없습니다.');
            });
        };

        async function getPoke() {
            const response = await fetchPoke();
            console.log(response); 
            console.log(response.pokemon[0].pokemon.name);  
            setPokeDatas(response.pokemon);
            console.log(pokeDatas);
        };

        getPoke();

    }, [])

    const pokeName = pokeDatas.map((pokeData, index) => //id값이 존재하지 않으므로 index로 대체, but key값으로는 index사용 지양
        <li key={index}> 
            <span>포켓몬 이름 : {pokeData.pokemon.name}</span> <br />
            <span>포켓몬 순서 : {index}</span>
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
