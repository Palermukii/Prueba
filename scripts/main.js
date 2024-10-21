document.addEventListener("DOMContentLoaded", function() {
const boton = document.getElementById("boton");
const tabla = document.getElementById("tabla");
const titulo = document.getElementById("titulo");
const menu = document.querySelector(".menu");
const boton_color = document.querySelectorAll(".boton_color");
const boton_menu = document.getElementById("boton_menu");
menu.style.display = "none";

boton.onclick = function() {
    if (tabla.style.visibility != "hidden") {
        tabla.style.visibility = "hidden"; // Oculta la tabla en el primer clic
    }
    else {
        tabla.style.visibility = "visible";
    }
}

titulo.onclick = function() {
    menu.style.display = "block";
}
boton_menu.onclick = function() {
    menu.style.display = "none";
}

boton_color.forEach(function(button) {
    button.onclick = function() {
        var color = this.getAttribute("data-color");
        titulo.style.color = color;
    }
}) 
    
});