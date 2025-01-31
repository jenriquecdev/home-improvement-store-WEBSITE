document.addEventListener("DOMContentLoaded", function() {

    // 1️⃣ Efecto Hover Brillante en los Botones de Navegación
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transition = "0.3s";
            link.style.textShadow = "0 0 10px rgba(255, 165, 0, 0.8)";
        });
        link.addEventListener("mouseout", () => {
            link.style.textShadow = "none";
        });
    });

    // 2️⃣ Animación en la Tabla de Ofertas
    const filasTabla = document.querySelectorAll(".tabla-ofertas tbody tr");
    filasTabla.forEach(fila => {
        fila.addEventListener("mouseover", () => {
            fila.style.transition = "0.3s";
            fila.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
            fila.style.transform = "scale(1.02)";
        });
        fila.addEventListener("mouseout", () => {
            fila.style.backgroundColor = "white";
            fila.style.transform = "scale(1)";
        });
    });

    // 3️⃣ Cambio Automático de Imagen en el Carrusel
    const carrusel = new bootstrap.Carousel(document.getElementById("carouselProductos"), {
        interval: 2000, // Cambia de imagen cada 4 segundos
        wrap: true
    });


});
