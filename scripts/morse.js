const input = document.getElementById("input");
const valorInput = document.getElementById("resultado");
const form = document.getElementById("formulario")

// input.addEventListener("input",function(){
//     const valor = input.value;
    
//     valorInput.innerHTML = `El valor del numero ${valor} es <b>${romanos(valor)}</b> en romano`;

// }) // Tiempo real con eventListener


form.addEventListener("submit", function(e){
    e.preventDefault()
    const valor = input.value;
    valorInput.innerHTML = `El valor del numero ${valor} es <b>${romanos(valor)}</b> en romano`;
}) // Formulario con eventListener

// input.oninput = function(){
//     const valor = input.value;
    
//     valorInput.innerHTML = `El valor del numero ${valor} es <b>${romanos(valor)}</b> en romano`;

// } Tiempo real sin eventListener


// form.onsubmit = function(e) {
//     e.preventDefault()
//     const valor = input.value;
    
//     valorInput.innerHTML = `El valor del numero ${valor} es <b>${romanos(valor)}</b> en romano`;
// } Formulario sin eventListener 


function romanos(n) {
    let valores = [
        {letra:"A" , simbolo:'.-'},
        {letra:"B" , simbolo:'-...'},
        {letra:"C" , simbolo:'-.-.'},
        {letra:"D" , simbolo:'CD'},
        {letra:"E" , simbolo:'C'},
        {letra:"F" , simbolo:'XC'},
        {letra:"G" , simbolo:'L'},
        {letra:"H" , simbolo:'XL'},
        {letra:"I" , simbolo:'X'},
        {letra:"J" , simbolo:'IX'},
        {letra:"K" , simbolo:'V'},
        {letra:"L" , simbolo:'IV'},
        {letra:"M" , simbolo:'I'},
        {letra:"N" , simbolo:'I'},
        {letra:"O" , simbolo:'I'},
        {letra:"P" , simbolo:'I'},
        {letra:"Q" , simbolo:'I'},
        {letra:"R" , simbolo:'I'},
        {letra:"S" , simbolo:'I'},
        {letra:"T" , simbolo:'I'},
        {letra:"U" , simbolo:'I'},
        {letra:"V" , simbolo:'I'},
        {letra:"W" , simbolo:'I'},
        {letra:"X" , simbolo:'I'},
        {letra:"Y" , simbolo:'I'},
        {letra:"Z" , simbolo:'I'},

    ]
    let resultado = "";
    for(let i = 0; i < valores.length; i++) {
        while(n >= valores[i].valor) {
            resultado += valores[i].simbolo
            n -= valores[i].valor
        }
    }
    return resultado;

    }
    