/*automatico*/
setInterval(function(){
    Next();
}, 5000);


function ocultar1(){
    document.getElementById('form_2').style.display = 'none';
}
function mostrar1(){
    document.getElementById('form_2').style.display = 'grid';
    
}

function mostrar2(){
    document.getElementById('form_3').style.display = 'grid';
    
}
function ocultar2(){
    document.getElementById('form_3').style.display = 'none';
}

/*Remover el boton volver*/
var grid = document.getElementById("form_1");
var divToRemove = grid.querySelector("div:nth-child(3)"); // selecciona el tercer elemento div
grid.removeChild(divToRemove);

/*BOTON ALERTA */
function mostrarImagen() {
    var imagen = document.getElementById("alerta");
    imagen.style.display = "block";
  }
  function ocultarImagen(){
    document.getElementById('alerta').style.display = 'none';
}



/*CONTADOR DE PERSONAS INSCRIPTAS*/
// Obtener el botón y el elemento donde se mostrará el contador
function contador(){
  var button = document.getElementById('agregar');
  var button2 = document.getElementById('cancelar');  
  var counterElement = document.getElementById('miContador');

// Obtener el valor del contador del sessionStorage, si existe
var counter = sessionStorage.getItem('contador');
if (counter) {
  counter = parseInt(counter); // Convertir el valor almacenado en un número entero
} else {
  counter = 1; // Si no existe, iniciar el contador en 1
}

// Mostrar el contador inicial en el elemento correspondiente
counterElement.textContent = counter;

// Incrementar el contador y actualizar el elemento y el sessionStorage al hacer clic en el botón
button.addEventListener('click', function() {
  counter++; // Incrementar el contador
  counterElement.textContent = counter; // Actualizar el elemento con el nuevo valor
  sessionStorage.setItem('contador', counter.toString()); // Guardar el contador en el sessionStorage como una cadena
});

button2.addEventListener('click', function() {
  counter--; // Decrementar el contador
  counterElement.textContent = counter; // Actualizar el elemento con el nuevo valor
  sessionStorage.setItem('contador', counter.toString()); // Guardar el contador en el sessionStorage como una cadena
});
}



/*BOTON INSCRIPCION (OPCION) 
const submitBtn = document.getElementById('btnSend');
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    const principalData = new FormData(document.getElementById('principal'));
    const secundarioData = new FormData(document.getElementById('secundario'));
    const terciarioData = new FormData(document.getElementById('terciario'));
    
    const combinedData = new FormData();
    combinedData.append('principal', principalData);
    combinedData.append('secundario', secundarioData);
    combinedData.append('terciario', terciarioData);
    
    fetch({
      method: 'POST',
      body: combinedData
    });
  });*/
