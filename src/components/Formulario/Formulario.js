import { useState } from "react";
import Campo from "../Campo";
import "./Formulario.css"
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actulizarNombre] =useState('')
    const [puesto, actulizarPuesto] =useState('')
    const [foto, actulizarFoto] =useState('')
    const [equipo, actualizarEquipo] =useState('')


    const [titulo, actualizarTitulo] = useState('')
    const [color, actualizarColor] = useState('')
    
    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log('Mensaje envio')
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        props.registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo='Nombre' 
                placeholder='Ingresar nombre' 
                required 
                valor={nombre} 
                actualizarValor={actulizarNombre}/>          
            <Campo 
                titulo='Puesto' 
                placeholder='Ingresar puesto' 
                required
                valor={puesto} 
                actualizarValor={actulizarPuesto}/>          
            <Campo 
                itulo='Foto' 
                placeholder='Ingresar enlace de la foto' 
                required
                valor={foto} 
                actualizarValor={actulizarFoto}/>
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
                />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Registrar Equipo</h2>
            <Campo 
                titulo='Titulo' 
                placeholder='Ingresar titulo' 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}/>          
            <Campo 
                titulo='Color' 
                placeholder='Ingresar el color en Hex...' 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type='color'
            />
            <Boton>
                Nuevo Equipo
            </Boton>
        </form>
    </section>
} ;

export default Formulario