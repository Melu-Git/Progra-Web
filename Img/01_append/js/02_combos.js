let colores=["azul","verde","amarillo"];
let paises=["Argentina","Brazil","Uruguay"];
let universidades=["UBA", "UNLAM", "UNSAM"];

let inicial=document.querySelector("#inicial");
let secundario=document.querySelector("#secundario");

inicial.addEventListener("change",()=>{
    secundario.innerHTML="";
    switch(inicial.value){
        case "1":
            colores.forEach((item)=>{
                //crear un nodo de tipo elemento option
                let option=document.createElement("option");
                //al option le agregamos un value
                option.value=item;
                //crear un nodo de tipo texto
                let texto=document.createTextNode(item);
                //al option agregarle el text node
                option.appendChild(texto);
                //al select secundario, agregarle el option
                secundario.appendChild(option);
            });
        break;
        case "2":
            paises.forEach((item)=>{
                //crear un nodo de tipo elemento option
                let option=document.createElement("option");
                //al option le agregamos un value
                option.value=item;
                //crear un nodo de tipo texto
                let texto=document.createTextNode(item);
                //al option agregarle el text node
                option.appendChild(texto);
                //al select secundario, agregarle el option
                secundario.appendChild(option);
            });
        break;
        case "3":
            universidades.forEach((item)=>{
                //crear un nodo de tipo elemento option
                let option=document.createElement("option");
                //al option le agregamos un value
                option.value=item;
                //crear un nodo de tipo texto
                let texto=document.createTextNode(item);
                //al option agregarle el text node
                option.appendChild(texto);
                //al select secundario, agregarle el option
                secundario.appendChild(option);
            });
        break;
        default:
            
        break;
    }
});