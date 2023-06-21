let cursos=[
    {
        titulo:"html 5",
        duracion:5
    },
    {
        titulo:"css",
        duracion:10
    },
    {
        titulo:"javascript",
        duracion:10
    },
    {
        titulo:"java",
        duracion:50
    }
];
let resultado = document.querySelector("#resultado");
cursos.forEach((item)=>{
    resultado.innerHTML+=`
        <article>
            <h2>Título: ${item.titulo}</h2>
            <p>Duración: ${item.duracion}</p>
        </article>
    `;
});
let buscador=document.querySelector("#buscador");
buscador.addEventListener("keyup",()=>{
    //1.-guardar el valor del buscador
    let valor=buscador.value;
    //2.-filtrar el array de cursos
    let cursosFiltrados=cursos.filter(curso=>curso.titulo.indexOf(valor)>-1);
    //3.-limpiar resultados
    resultado.innerHTML="";
    //4.-llenar resultados con los cursos filtrados
    cursosFiltrados.forEach((item)=>{
        resultado.innerHTML+=`
            <article>
                <h2>Título: ${item.titulo}</h2>
                <p>Duración: ${item.duracion}</p>
            </article>
        `;
    });
});