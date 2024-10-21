import { primeraMayus, mayusArray } from './functions.js';

const regiones= [{name: "kanto", values: [0,151]},
 {name: "johto", values: [152,99]},
 {name: "hoenn", values:[251,135]},
 {name: "sinnoh", values:[386,107]},
 {name: "unova", values:[493,155]},
 {name: "kalos", values:[649,72]},
 {name: "alola", values:[721,89]},
 {name: "galar", values:[809,96]},
 {name: "paldea", values:[905,111]}]
 let valorI;
 let valorF;
 
document.addEventListener("DOMContentLoaded", function () {
    // Función para obtener el parámetro 'region' de la URL
    function getRegionFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('region');
    }
    
    const region = getRegionFromUrl();
    const selectedRegion = regiones.find(r => r.name === region);

    if (selectedRegion) {
        valorI = selectedRegion.values[0];
        valorF = selectedRegion.values[1];
    } else {
        console.error('Región no encontrada');
        return;
    }
 
    console.log(valorI, valorF);
        
    // Función para cargar el contenido dinámico basado en la región
    const regionContent = document.getElementById("regionContent");
    
    // Simular llamada a una API para obtener datos de la región
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${valorI}&limit=${valorF}`)
        .then(response => response.json())
        .then(data => {
            let index = valorI;

            // Crear una lista de promesas para cada Pokémon
            const pokemonPromises = data.results.map((_, i) => {
                const currentPokemon = index + i + 1;

                // Evitar Pokémon con ID 538
                if (currentPokemon === 538) {
                    return Promise.resolve();
                }

                // Fetch para cada Pokémon
                return fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
                    .then(response2 => response2.json())
                    .then(data2 => ({
                        name: data.results[i].name,
                        sprite: data2.sprites.other.home.front_default,
                        id: currentPokemon
                    }));
            });

            // Usar Promise.all para esperar a que todas las promesas se completen
            Promise.all(pokemonPromises).then(pokemonList => {
                let pokemonHTML = '';

                // Procesar la lista de resultados
                pokemonList.forEach(pokemon => {
                    if (pokemon) { // Ignorar los casos donde `currentPokemon` era 538
                        pokemonHTML += `
                        <div class="pokemon">
                        <a href="./pokemon.html?id=${pokemon.id}">
                            <div class ="nombrePokemon">
                            <img src="${pokemon.sprite}" alt="${pokemon.name}" width="150px">
                            <p>${primeraMayus(pokemon.name)}</p>
                            </div>
                        </a>
                        </div>`;
                    }
                });

                // Insertar el HTML generado en la página
                regionContent.innerHTML = pokemonHTML;
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
            regionContent.innerHTML = `<p>Error al cargar la información de la región.</p>`;
        });
});
