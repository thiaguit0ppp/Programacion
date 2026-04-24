const express = require("express");//Importamos la librería para poder usar sus métodos.
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

const dominiosPermitidos = [ 
  'http://localhost:5173' 
];

app.use(express.json())
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.use(morgan("dev"));
app.use(cors({
    origin: function(origin,callback){
        if (!origin || dominiosPermitidos.indexOf(origin) !==-1) {
            callback(null,true)
        }else{
            callback(new Error("No permitido CORS"))
        }
    },
    credentials:true,
    methods:["GET","POST","PUT","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"]
}))


const port = 8000; //configuramos el puerto

const alumnos = [
    {nombre: "Juan", apellido: "Perez", documento: "12345678"},
    {nombre: "Maria", apellido: "Gomez", documento: "87654321"},
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

function devolverDatos(lista) {
    let resultado = [];
    for (let i = 0; i < lista.length; i++) {
        resultado.push({
            nombre: lista[i].nombre,
            apellido: lista[i].apellido
        });
    }
    return resultado;
}

app.get("/alumnos", (req, res)=>{ //Configuramos la escucha de el servidor.
    
    res.json(devolverDatos(alumnos));
});

app.get("/profesores", (req, res)=>{ //Configuramos la escucha de el servidor.
    res.json(devolverDatos(profesores));
});

app.get("/preceptores", (req, res)=>{ //Configuramos la escucha de el servidor.
    res.json(devolverDatos(preceptores));
});

app.listen(port, ()=>{
    console.log(`Corriendo en http:localhost:${port}`);
});

