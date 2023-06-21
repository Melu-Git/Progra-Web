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

/**Remover el boton volver*/
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
