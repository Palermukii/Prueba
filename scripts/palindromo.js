const texto = document.getElementById("texto");
const boton = document.getElementById("boton_palindromo");
const form = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

form.onsubmit = function(e) {

    let palabra = texto.value.toLocaleLowerCase();
    e.preventDefault();
    let right = palabra.length - 1;
    let left = 0;
    let palabrainversa = [];
    let space = false;
    while(right > left -1) {
        if(palabra[right] == " ") {space = true}
        palabrainversa += palabra[right];
        right--
    }
    if(palabra == palabrainversa && space == false) {
        resultado.innerHTML += `<p class="palindromo">La palabra ${palabra} es palindromo</p>`
        
    }
    else if(space == false) {resultado.innerHTML += `<p class="nPalindromo">La palabra ${palabra} no es palindromo</p>`}
    else {resultado.innerHTML += `<p class="espacio">La palabra no puede contener espacios</p>`}
}


