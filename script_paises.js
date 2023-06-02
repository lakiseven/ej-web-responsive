// Obtener referencia al botón de agregar fila
var btnAgregarFila = document.getElementById("agregarFilaPaises");

// Obtener referencia a la lista de países
var listaPaises = document.getElementById("paises");

// Obtener referencia al input
var inputPais = document.getElementById("myInput");

// Función para agregar una fila a la lista de países
function agregarFila() {
    // Obtener el valor del input
    var nuevoPais = inputPais.value;

    // Crear un nuevo elemento de lista
    var nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nuevoPais;

    // Agregar el nuevo elemento a la lista de países
    listaPaises.appendChild(nuevoElemento);

    // Limpiar el valor del input
    inputPais.value = "";
}

// Agregar un evento de clic al botón
btnAgregarFila.addEventListener("click", agregarFila);