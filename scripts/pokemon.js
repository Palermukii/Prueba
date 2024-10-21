import { primeraMayus, mayusArray } from './functions.js';

// Obtener el ID del personaje de la URL
const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id'); // Leer el parámetro 'id' de la URL

// Componer la URL de la API con el ID del personaje
let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

// Ejecutar cuando el body esté cargado
document.body.onload = function() {
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarPersonaje(data))
    .catch(error => console.log('Error al cargar los datos:', error));
}
// Función para mostrar los detalles del personaje
const mostrarPersonaje = (data) => {
    // Seleccionar el contenedor donde se mostrarán los datos
    const contenedor = document.getElementById("pokemon-info");
    
    // Comprobar si los datos contienen el personaje esperado
    if (!data || !data.name) {
        contenedor.innerHTML = `<p>No se encontraron datos para este personaje.</p>`;
        return;
    }
    let tipos = [];
    for(let i = 0; i < data.types.length; i++) {
        tipos.push(data.types[i].type.name);
    }

    // Insertar los datos del personaje en el contenedor
    contenedor.innerHTML = `
        <h1>${primeraMayus(data.name)}</h1>
        <div class="stats">
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Tipo</strong>  ${mayusArray(tipos).join(', ')}</p>
        </div>
        <img src=${data.sprites.other.home.front_default} alt="" width="300px">
        <div class="botones">
        <a href="./pokemon.html?id=${parseInt(pokemonId)-1}">Previous pokemon</a>
        <a href="./pokemon.html?id=${parseInt(pokemonId)+1}">Next pokemon</a>
        </div>
    `;
}
