import Listado from "./componentes/Listado";
import "./App.css";



export default function App(){

  return (<div className="App">
    <h1>Componente App</h1>
    <Listado 
      personas={personas}
    />
  </div>);
}