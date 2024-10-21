document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los divs dentro del contenedor
    const regions = document.querySelectorAll("div[id]");

    // Añadir el evento de clic para cada div
    regions.forEach(function (region) {
        region.addEventListener("click", function () {
            // Obtener el ID del div clickeado
            const regionId = this.id;

            // Redirigir a la página correspondiente
            window.location.href = `region.html?region=${regionId}`;
        });
    });
});
