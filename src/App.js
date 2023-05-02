import { useState } from 'react';
import Formulario from './components/Formulario/Formulario.js';
import './App.css';
import Header from './components/Headers/Header';
import MiOrg from './components/MiOrg/index.js';
import Equipo from './components/Equipo/index.js';
import Colaborador from './components/Colaborador/index.js';
import Footer from './components/Footer/index.jsx';
function App() {
  
  const [mostrarFormulario, actulizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([
    {
    nombre: 'Gibran Eduardo', 
    puesto: 'Desarrollador', 
    foto: 'https://avatars.githubusercontent.com/u/97703657?v=4', 
    equipo: 'Front End'
    },
    {
      nombre: 'Elisa Thierry', 
      puesto: 'Maestra', 
      foto: 'https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/311738444_10209819000187774_5355699867272414680_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeECWPly0qSqeklFTJWBNfcPEICNffJXFZ4QgI198lcVnveCZMRb7CHLwNBJVUca99Vhj_AGztgskg5YmNcapyul&_nc_ohc=uomTC0pDvZwAX-xrkPy&_nc_ht=scontent.fmex5-1.fna&oh=00_AfBiLWqAcTS4G_PxLarx10I5z5e3O4rdtEtY3OuwPsmDtA&oe=6455378E', 
      equipo: 'Front End',
    },
    {
      nombre: 'Ana Lizbeth', 
      puesto: 'Supervisora', 
      foto: 'https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/289876112_4556632877773713_3631786198606300064_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEZJ6627nvDrr9IOkRdJOsu1HTm6_aaXpnUdObr9ppemS9-FcfbgsiaQXC6FF7KLbFgSnIUGw-KVgP1G4cZE7WT&_nc_ohc=4e3XrkSf4PgAX-NMHvQ&_nc_ht=scontent.fmex36-1.fna&oh=00_AfAmJ1CUHVNPoxtkS5h61gtkt_OFZU_ExhR3afMWg03Z4g&oe=6454E0DB', 
      equipo: 'Devops',
    },
    {
      nombre: 'Sara Pérez', 
      puesto: 'Desarolladora', 
      foto: 'https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/302096965_2558133497656944_4638819201382927026_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE-UiX7syWmN2wnx7FDs2w-creSkAikDn1yt5KQCKQOfXm1_XcfMbmepch7SlDsx9H-BJALhOORDlVioWDTw2zQ&_nc_ohc=uEtoC0gV9t8AX_m_QWL&_nc_ht=scontent.fmex23-1.fna&oh=00_AfAe6YzbuRgXeDRdRfleq-9_QzcF0-eQHFlS6adDGSWKUA&oe=6455A3FB', 
      equipo: 'Devops',
    },
    {
      nombre: 'Jocelin Aguilar', 
      puesto: 'Desarrolladora', 
      foto: 'https://scontent.fmex22-1.fna.fbcdn.net/v/t1.6435-9/95345722_3534882829861914_6875946498605973504_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE_fXoYT7YlmL2kdqOYZTWd1ce_erafhlbVx796tp-GVvYJgv0-IOBnz8aYj3QD6BZtMHkI1jEXdHtltDYYKurb&_nc_ohc=UCGOVepD6uEAX_Uf8ta&_nc_ht=scontent.fmex22-1.fna&oh=00_AfC086Gha-_M5jAHrUOuOWB-l0OKyNdWo3kW3kcz2dHHAA&oe=6477FF56', 
      equipo: 'Móvil',
    },
    {
      nombre: 'Paloma Saotome', 
      puesto: 'Maestra', 
      foto: 'https://scontent.fmex31-1.fna.fbcdn.net/v/t39.30808-6/281890853_189542370063385_1430890645170501990_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE3oLau65Zu7hhJMEYVy2jBhCV_HBsWO7iEJX8cGxY7uMrrDI1rfrel3xNDSxK2NAdhQqxx3mFsqHfaBkrgoF4h&_nc_ohc=AwrbGd7KfBgAX_ztrQz&_nc_ht=scontent.fmex31-1.fna&oh=00_AfD4emEnzyQUC_ihAINWpF80SdokiVik15ZKZB7UAeQL2g&oe=6454C1BD', 
      equipo: 'Móvil',
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
  const eliminarColaborador = () => {
    console.log('Se elimino el colaborador')
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
      {
        mostrarFormulario && <Formulario 
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador = {registrarColaborador}
        />
      }
      
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores = { colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = { eliminarColaborador }
        />)
      }

      <Footer />

    </div>
  );
}

export default App;
