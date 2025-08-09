function mostrarAnioActual() {
  const elementoAnio = document.getElementById("year");
  const anioActual = new Date().getFullYear();
  elementoAnio.textContent = anioActual;
}

// Llamar a la función para que se ejecute al cargar la página
mostrarAnioActual();