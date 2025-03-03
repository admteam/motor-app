// Función para abrir el menú lateral
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.overflow = "hidden"; // Evita el desplazamiento de la página cuando el menú está abierto
}

// Función para cerrar el menú lateral
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.overflow = "auto"; // Restaura el desplazamiento cuando el menú está cerrado
}

// Función para cargar un PDF en el contenedor evitando recargas innecesarias
function openPDF(pdfFile) {
    const pdfContainer = document.getElementById("pdf-container");
    
    // Si el PDF ya está cargado, no hacer nada
    if (pdfContainer.dataset.currentPdf === pdfFile) {
        return;
    }

    pdfContainer.dataset.currentPdf = pdfFile; // Guardamos el PDF actual
    pdfContainer.innerHTML = `<embed src="${pdfFile}" width="100%" height="100%" type="application/pdf">`;
}

// Cerrar menú automáticamente en móviles tras seleccionar un enlace
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 600) {
            closeNav();
        }
    });
});

