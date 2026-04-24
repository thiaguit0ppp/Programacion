import Listado from "./componentes/Listado";
import "./App.css";

const personas=[
    {documento:"123456", nombres:"Benjamin", apellidos:"Panicheli"},
    {documento:"123456", nombres:"Oriana", apellidos:"Panicheli"},
    {documento:"123456", nombres:"Venja", apellidos:"Mansolla"},
]

export default function App(){

  return (<div className="App">
    <h1>Componente App</h1>
    <Listado 
      personas={personas}
    />
  </div>);
}