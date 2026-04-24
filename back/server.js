const express = require("express");//Importamos la librería para poder usar sus métodos.

const app = express();//instanciamos un servidor
const port = 8000; //configuramos el puerto

const alumnos = [
    {nombre: "Juan", apellido: "Perez"},
    {nombre: "Maria", apellido: "Gomez"},
    {nombre: "Pedro", apellido: "Lopez"}
];

const profesores = [
    {nombre: "Ana", apellido: "Garcia"},
    {nombre: "Luis", apellido: "Martinez"},
    {nombre: "Sofia", apellido: "Rodriguez"}
];

const preceptores = [
    {nombre: "Carlos", apellido: "  Sanchez"},
    {nombre: "Laura", apellido: "Diaz"},
    {nombre: "Diego", apellido: "Fernandez"}
];  

function devolverDatos(lista){
    let resultado = "";
    for(let i = 0; i < lista.length; i++){
        resultado += `, ${lista[i].nombre} ${lista[i].apellido}\n`;
    }
    return resultado;

}

app.get("/alumnos", (req, res)=>{ //Configuramos la escucha de el servidor.
    
    res.send("Lista de alumnos:" + devolverDatos(alumnos));
});

app.get("/profesores", (req, res)=>{ //Configuramos la escucha de el servidor.
    res.send("Lista de profesores:\n" + devolverDatos(profesores));
});

app.get("/preceptores", (req, res)=>{ //Configuramos la escucha de el servidor.
    res.send("Lista de preceptores:\n" + devolverDatos(preceptores));
});

app.listen(port, ()=>{
    console.log(`Corriendo en http:localhost:${port}`);
});

