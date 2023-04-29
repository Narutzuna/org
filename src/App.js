import { useState } from 'react';
import Formulario from './components/Formulario/Formulario.js';
import './App.css';
import Header from './components/Headers/Header';
import MiOrg from './components/MiOrg/index.js';
import Equipo from './components/Equipo/index.js';
function App() {
  
  const [mostrarFormulario, actulizarMostrar] = useState(true)

  const cambiarMostrar = () =>{
    actulizarMostrar(!mostrarFormulario)
  } 

  // Mi lista de equipos

  const equipos = [
    {
      titulo:"Programació", 
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9',
    },

    {
      titulo:"Front End", 
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF',
    },

    {
      titulo:"Data Science", 
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2',
    },

    {
      titulo:"Devops", 
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8',
    },

    {
      titulo:"UX y Diseño", 
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5',
    },

    {
      titulo:"Móvil", 
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9',
    },

    {
      titulo:"Innovación y Gestión", 
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF',
    },
]
  
  // Ternario --> condicion ? seMuestra : noSeMuestra
  // Corto Circuito ----> Condicion && seMuestra 

  return (
    <div>
      <Header/>
      { /*mostrarFormulario /*=== true ? <Formulario /> : <></>*/}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo}/>)
      }

    </div>
  );
}

export default App;
