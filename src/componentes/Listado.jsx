import Targeta from "./Targeta"
const personas=[
    {documento:"123456", nombres:"Benjamin", apellidos:"Panicheli"},
    {documento:"123456", nombres:"Oriana", apellidos:"Panicheli"},
    {documento:"123456", nombres:"Venja", apellidos:"Mansolla"},
]

export default function Listado(){
    return(<div>
        <h1>Componente listado</h1>
        <div className="Listado">
            {personas.map((personas, index) =>
            <Targeta 
                documento={personas.documento}
                nombres={personas.nombres}
                apellidos={personas.apellidos}
            />
            )}
        </div>
    </div>)
}