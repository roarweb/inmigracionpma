// Obtenemos el elemento del DOM donde queremos mostrar el año
const yearElement = document.getElementById('year');

// Creamos un nuevo objeto Date
const today = new Date();

// Obtenemos el año actual usando getFullYear()
const currentYear = today.getFullYear();

// Asignamos el año actual como texto del elemento
yearElement.textContent = currentYear;
