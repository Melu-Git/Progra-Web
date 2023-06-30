let agregar=document.querySelector("#agregar");
agregar.addEventListener("click",()=>{
    //1.-obtener el valor del input de id item
    let item=document.querySelector("#item").value;

    //2.- crear un nodo de tipo li
    let nodoLi=document.createElement("li");

    //3.- crear un nodo de tipo texto con el valor obtenido en el campo
    let nodoTexto=document.createTextNode(item);

    //4.- hacer hijo el nodo texto del li
    nodoLi.appendChild(nodoTexto);

    //5.- hacer hijo al li del ul //ul->li->text
    let lenguajes=document.querySelector("#lenguajes");
    lenguajes.appendChild(nodoLi);
});