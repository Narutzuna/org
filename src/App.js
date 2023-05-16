import { useState } from 'react';
import Formulario from './components/Formulario/Formulario.js';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Headers/Header';
import MiOrg from './components/MiOrg/index.js';
import Equipo from './components/Equipo/index.js';
import Colaborador from './components/Colaborador/index.js';
import Footer from './components/Footer/index.jsx';
function App() {
  
  const [mostrarFormulario, actulizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id:uuidv4(),
      nombre: 'Gibran Eduardo', 
      puesto: 'Desarrollador', 
      foto: 'https://avatars.githubusercontent.com/u/97703657?v=4', 
      equipo: 'Front End',
      fav: true
    },
    {
      id:uuidv4(),
      nombre: 'Elisa Thierry', 
      puesto: 'Maestra', 
      foto: '../public/img/311738444_10209819000187774_5355699867272414680_n.jpg', 
      equipo: 'Front End',
      fav: false
    },
    {
      id:uuidv4(),
      nombre: 'Ana Lizbeth', 
      puesto: 'Supervisora', 
      foto: '../public/img/Ana.jpg', 
      equipo: 'Devops',
      fav: false
    },
    {
      id:uuidv4(),
      nombre: 'Sara Pérez', 
      puesto: 'Desarolladora', 
      foto: 'https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/302096965_2558133497656944_4638819201382927026_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE-UiX7syWmN2wnx7FDs2w-creSkAikDn1yt5KQCKQOfXm1_XcfMbmepch7SlDsx9H-BJALhOORDlVioWDTw2zQ&_nc_ohc=phIGuLAzgsUAX9Aer_1&_nc_ht=scontent.fmex23-1.fna&oh=00_AfAdVHjfyN_mcQbAldZOwV8T1SCMpjoiQU2cicLeILN2YA&oe=64637BBB', 
      equipo: 'Devops',
      fav: false
    },
    {
      id:uuidv4(),
      nombre: 'Jocelin Aguilar', 
      puesto: 'Desarrolladora', 
      foto: 'https://scontent.fmex22-1.fna.fbcdn.net/v/t1.6435-9/95345722_3534882829861914_6875946498605973504_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE_fXoYT7YlmL2kdqOYZTWd1ce_erafhlbVx796tp-GVvYJgv0-IOBnz8aYj3QD6BZtMHkI1jEXdHtltDYYKurb&_nc_ohc=UCGOVepD6uEAX_Uf8ta&_nc_ht=scontent.fmex22-1.fna&oh=00_AfC086Gha-_M5jAHrUOuOWB-l0OKyNdWo3kW3kcz2dHHAA&oe=6477FF56', 
      equipo: 'Móvil',
      fav: false
    },
    {
      id:uuidv4(),
      nombre: 'Paloma Saotome', 
      puesto: 'Maestra', 
      foto: '../public/img/Paloma.jpg', 
      equipo: 'Móvil',
      fav: false
    },
  ])

  const [equipos, actualizarEquipo] = useState([
      {
        id:uuidv4(),
        titulo:"Programació", 
        colorPrimario: '#57C278',
        colorSecundario: '#D9F7E9',
      },
  
      {
        id:uuidv4(),
        titulo:"Front End", 
        colorPrimario: '#82CFFA',
        colorSecundario: '#E8F8FF',
      },
  
      {
        id:uuidv4(),
        titulo:"Data Science", 
        colorPrimario: '#A6D157',
        colorSecundario: '#F0F8E2',
      },
  
      {
        id:uuidv4(),
        titulo:"Devops", 
        colorPrimario: '#E06B69',
        colorSecundario: '#FDE7E8',
      },
  
      {
        id:uuidv4(),
        titulo:"UX y Diseño", 
        colorPrimario: '#DB6EBF',
        colorSecundario: '#FAE9F5',
      },
  
      {
        id:uuidv4(),
        titulo:"Móvil", 
        colorPrimario: '#FFBA05',
        colorSecundario: '#FFF5D9',
      },
  
      {
        id:uuidv4(),
        titulo:"Innovación y Gestión", 
        colorPrimario: '#FF8A29',
        colorSecundario: '#FFEEDF',
      },
  ])

  const cambiarMostrar = () =>{
    actulizarMostrar(!mostrarFormulario)
  } 
  
  // Registar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador', colaborador)
    // Spread operatore
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log('Se elimino el colaborador', id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  // Actualizar color 
  const actualizarColor = (color, id) => {
    console.log('Actualizar: ', color, id)
    const equipoActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipo(equipoActualizados)
  }

  //Crear equipo 
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipo([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }

  const like = (id) => {
    console.log('like', id)
    const colaboradoresActualizado = colaboradores.map((colaborador) => {
        if(colaborador.id === id){
          colaborador.fav = !colaborador.fav
        }
        return colaborador
    })

    actualizarColaboradores(colaboradoresActualizado)
  }

  // Mi lista de equipos
  
  // Ternario --> condicion ? seMuestra : noSeMuestra
  // Corto Circuito ----> Condicion && seMuestra 

  return (
    <div>
      <Header/>
      { /*mostrarFormulario /*=== true ? <Formulario /> : <></>*/}
      {
        mostrarFormulario && <Formulario 
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador = {registrarColaborador}
            crearEquipo = {crearEquipo}
        />
      }
      
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores = { colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = { eliminarColaborador }
        actualizarColor={ actualizarColor }
        like = {like}
        />)
      }

      <Footer />

    </div>
  );
}

export default App;
