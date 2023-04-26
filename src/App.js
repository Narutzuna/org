import { useState } from 'react';
import Formulario from './components/Formulario/Formulario.js';
import './App.css';
import Header from './components/Headers/Header';
import MiOrg from './components/MiOrg/index.js';
function App() {
  
  const [mostrarFormulario, actulizarMostrar] = useState(true)

  const cambiarMostrar = () =>{
    actulizarMostrar(!mostrarFormulario)
  } 
  
  // Ternario --> condicion ? seMuestra : noSeMuestra
  // Corto Circuito ----> Condicion && seMuestra 

  return (
    <div>
      <Header/>
      { /*mostrarFormulario /*=== true ? <Formulario /> : <></>*/}
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
