
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

// Función para cargar y mostrar el PDF
function openPDF(pdfFile) {
    const pdfContainer = document.getElementById("pdf-container");
    pdfContainer.innerHTML = `<iframe src="pdfs/${pdfFile}" width="100%" height="600px"></iframe>`;
}

