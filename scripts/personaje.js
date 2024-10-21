// Obtener el ID del personaje de la URL
const urlParams = new URLSearchParams(window.location.search);
const personajeId = urlParams.get('id'); // Leer el parámetro 'id' de la URL

// Componer la URL de la API con el ID del personaje
let url = `https://dragonball-api.com/api/characters/${personajeId}`;

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
    const contenedor = document.getElementById("personaje-info");

    // Comprobar si los datos contienen el personaje esperado
    if (!data || !data.name) {
        contenedor.innerHTML = `<p>No se encontraron datos para este personaje.</p>`;
        return;
    }

    // Insertar los datos del personaje en el contenedor
    contenedor.innerHTML = `
        <h1>${data.name}</h1>
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Max Ki:</strong> ${data.maxKi}</p>
        <p><strong>Raza:</strong> ${data.race}</p>
        <p><strong>Género:</strong> ${data.gender}</p>
        <img src="${data.image}" width="90em">
    `;
}