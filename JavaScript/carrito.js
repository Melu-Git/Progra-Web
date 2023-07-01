// Obtener referencia a los elementos del DOM
var contadorElement = document.getElementById('contador');
var cursosObtenidosElement = document.getElementById('cursos-obtenidos');
var popupElement = document.getElementById('popup');
var mensajeVacioElement = document.getElementById('mensaje-vacio');

// Verificar si hay un contador almacenado en sessionStorage
if (sessionStorage.getItem('contador')) {
  // Obtener el valor almacenado
  var contador = parseInt(sessionStorage.getItem('contador'));
  // Actualizar el contador en el botón
  contadorElement.textContent = contador;
}

// Función para incrementar el contador y almacenar en sessionStorage
function incrementarContador() {
  // Obtener el valor actual del contador
  var contador = parseInt(contadorElement.textContent);
  // Incrementar el contador
  contador++;
  // Actualizar el contador en el botón
  contadorElement.textContent = contador;
  // Almacenar el contador en sessionStorage
  sessionStorage.setItem('contador', contador.toString());
}

// Función para mostrar los cursos obtenidos en el popup
function mostrarCursosObtenidos() {
  // Obtener el valor actual del contador
  var contador = parseInt(contadorElement.textContent);

  // Si no hay cursos obtenidos, mostrar mensaje vacío
  if (contador === 0) {
    mensajeVacioElement.style.display = 'block';
    cursosObtenidosElement.style.display = 'none';
  } else {
    // Mostrar cursos obtenidos
    mensajeVacioElement.style.display = 'none';
    cursosObtenidosElement.style.display = 'block';
    cursosObtenidosElement.textContent = 'Cursos obtenidos: ' + contador;
  }

  // Mostrar el popup
  popupElement.style.display = 'block';
}

// Event listener para el botón "Comprar" de cada curso
var botonesComprar = document.getElementsByClassName('ver_curso');
for (var i = 0; i < botonesComprar.length; i++) {
  botonesComprar[i].addEventListener('click', incrementarContador);
}

// Función para mostrar los cursos ocultos
function mostrarCursos() {
  var cursosOcultos = document.getElementById('card-list-cursos2');
  cursosOcultos.style.display = 'grid';
  var botonMostrar = document.getElementById('boton_mostrar');
  botonMostrar.style.display = 'none';
}

// Función para ocultar los cursos
function ocultarCursos() {
  var cursosOcultos = document.getElementById('card-list-cursos2');
  cursosOcultos.style.display = 'none';
  var botonMostrar = document.getElementById('boton_mostrar');
  botonMostrar.style.display = 'block';
}