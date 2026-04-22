import Targeta from "./Targeta"

export default function Listado({personas}){
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