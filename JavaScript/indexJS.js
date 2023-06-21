$(document).ready(function(){
    $('#sliderHome').nivoSlider();
});


/*automatico*/
setInterval(function(){
    Next();
}, 5000);


function mostrar(){
    document.getElementById('card-list-cursos2').style.display = 'grid';
    
}

function ocultar(){
    document.getElementById('card-list-cursos2').style.display = 'none';
}