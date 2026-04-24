export default function Targeta({documento, apellidos, nombres}){
    return(
        <div className="Tarjeta">
            <h2>{documento}</h2>
            <h2>{apellidos}, {nombres}</h2>
        </div>
    )
}