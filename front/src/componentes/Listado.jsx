import Targeta from "./Targeta";

export default function Listado({ personas }) {
  return (
    <div>
      <h1>Componente listado</h1>

      <div className="Listado">
        {personas.map((persona, index) => (
          <Targeta
            key={index}
            documento={persona.documento}
            nombres={persona.nombre}
            apellidos={persona.apellido}
          />
        ))}
      </div>
    </div>
  );
}