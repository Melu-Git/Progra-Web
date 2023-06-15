const slider= document.querySelector("#carrousel");
let carrouselSection= document.querySelectorAll(".carrousel_section");
let carrouselSectionLast= carrouselSection[carrouselSection.length -1];

const btnLeft=document.querySelector("btn_left");
const btnRight=document.querySelector("btn_right");

carrousel.inserAdjacentElement('afterbegin', carrouselSectionLast);

function Next(){
let carrouselSectionFirst = document.querySelectorAll(".carrousel_section")[0];

carrousel.style.marginLeft = "-200%";
carrousel.style.transition = "all 0.5s";
setTimeout(function(){
    carrousel.style.transition = "none";
    carrousel.inserAdjacentElement('beforeend', carrouselSectionFirst );
    carrousel.style.marginLeft = "-100%";
}, 500);
}

function Prev(){
    let carrouselSection = document.querySelectorAll(".carrousel_section");
    let carrouselSectionLast= carrouselSection[carrouselSection.length -1];
    carrousel.style.marginLeft = "0";
    carrousel.style.transition = "all 0.5s";
    setTimeout(function(){
        carrousel.style.transition = "none";
        carrousel.inserAdjacentElement('beforeend', carrouselSectionFirst );
        carrousel.style.marginLeft = "-100%";
    }, 500);
    }

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
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
