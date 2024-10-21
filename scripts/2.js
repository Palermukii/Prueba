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
        {valor: 1000, simbolo:'M'},
        {valor: 900, simbolo:'CM'},
        {valor: 500, simbolo:'D'},
        {valor: 400, simbolo:'CD'},
        {valor: 100, simbolo:'C'},
        {valor: 90, simbolo:'XC'},
        {valor: 50, simbolo:'L'},
        {valor: 40, simbolo:'XL'},
        {valor: 10, simbolo:'X'},
        {valor: 9, simbolo:'IX'},
        {valor: 5, simbolo:'V'},
        {valor: 4, simbolo:'IV'},
        {valor: 1, simbolo:'I'},

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
    