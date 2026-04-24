import Listado from "./componentes/Listado";
import "./App.css";
import { getPersonas } from "./personas";
import { useEffect, useState } from "react";

export default function App() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    getPersonas()
      .then(data => setPersonas(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Componente App</h1>
      <Listado personas={personas} />
    </div>
  );
}