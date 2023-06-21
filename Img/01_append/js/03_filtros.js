/*
    array.filter(variableInd => variableInd.atributo=="valor");
    cursos.filter(curso => curso.idioma=="ingles" && curso.establecimiento==1);
*/
let contenidoCursos=document.querySelector("#cursos");
cursos.forEach((item)=>{
    contenidoCursos.innerHTML+=`<article>
        <p>Establecimiento: ${item.establecimiento}</p>
        <p>Idioma: ${item.idioma}</p>
        <p>Horario: ${item.horario}</p>
    </article>`;
});
let filtrar=document.querySelector("#filtrar");
filtrar.addEventListener("click",()=>{
    //1.-limpiar el section contenidoCursos
    contenidoCursos.innerHTML="";
    //2. guardar en una variable el valor del combo 1
    let establecimiento=document.querySelector("#establecimiento").value;
    //3. guardar en una variable el valor del combo 2
    let idioma=document.querySelector("#idioma").value;
    //4. guardar en una variable, los cursos filtrados
    let cursosFiltrados= cursos.filter(curso => curso.establecimiento ==establecimiento && curso.idioma==idioma);
    //5. recorrer los cursos filtrados y llenar dinámicamente el section
    cursosFiltrados.forEach((item)=>{
        contenidoCursos.innerHTML+=`
            <article>
                <p>Establecimiento: ${item.establecimiento}</p>
                <p>Idioma: ${item.idioma}</p>
                <p>Horario: ${item.horario}</p>
            </article>
        `;
    });
        
});
