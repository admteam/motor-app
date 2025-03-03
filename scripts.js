
// Función para abrir el menú lateral
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

// Función para cerrar el menú lateral
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Función para cargar un PDF en el contenedor
function openPDF(pdfFile) {
    const pdfContainer = document.getElementById("pdf-container");
    pdfContainer.innerHTML = `<embed src="${pdfFile}" width="100%" height="100%" type="application/pdf">`;
}
